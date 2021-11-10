import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DemonioService } from 'src/app/services/demonio.service';
import { Demonio } from '../../models/Demonio';
import { Pelea } from 'src/app/models/Pelea';
import { Lugar } from 'src/app/models/Lugar';
import { Parte } from 'src/app/models/Parte';
import { Chart, registerables } from 'chart.js';
import { LugarService } from 'src/app/services/lugar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: any;
  chart: any;
  porcentajeD: number;
  porcentajeI: number;
  demonios: Demonio[];
  peleas: Pelea[];
  lugares: Lugar[];
  partes: Parte[];
  derrotados: Demonio[];
  invictos: Demonio[];

  constructor(private demonioService: DemonioService, private lugarService:LugarService) {
    Chart.register(...registerables);
    this.demonios = [];
    this.peleas = [];
    this.lugares = [];
    this.partes = [];
    this.derrotados = [];
    this.invictos = [];
    this.porcentajeD = 0;
    this.porcentajeI = 0;
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('demonsChart');
    this.ctx = this.canvas.getContext('2d');
    // this.generateChart()
    let chart = this.chart;
  }

  ngOnInit(): void {
    // Obtener los demonios desde el API
    this.initialize();
  }

  initialize() {
    this.demonioService.getDemonios().subscribe(
      demonios => {
        this.demonios = demonios;
      }
    );
    this.demonioService.getDerrotados().subscribe(
      derrotados => this.derrotados = derrotados
    );
      this.demonioService.getInvictos().subscribe(
      invictos => this.invictos = invictos
    );
    this.generateChart(this.derrotados.length, this.invictos.length);
    this.lugarService.getLugares().subscribe(
      lugares => this.lugares = lugares
    );
    this.calculatePercentages();
  }

  calculatePercentages() {
    let total = this.derrotados.length + this.invictos.length;
    total === 0 ? this.porcentajeD = 0 : this.porcentajeD = this.derrotados.length / (total/100);
    total === 0 ? this.porcentajeI = 0 : this.porcentajeI = this.invictos.length / (total/100);
  }

  generateChart(derrotados:number, invictos:number) {
    this.canvas = document.getElementById('demonsChart');
    this.ctx = this.canvas.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ['Derrotados', 'No derrotados'],
        datasets: [
          {
            data: [derrotados, invictos],
            backgroundColor: ['#10c469', '#ff5b5b'],
            borderWidth: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '80%',
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

}
