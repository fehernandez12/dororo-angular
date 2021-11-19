import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DemonioService } from 'src/app/services/demonio.service';
import { Demonio } from '../../models/Demonio';
import { Pelea } from 'src/app/models/Pelea';
import { Lugar } from 'src/app/models/Lugar';
import { Parte } from 'src/app/models/Parte';
import { Chart, registerables } from 'chart.js';
import Swal from 'sweetalert2';
import { LugarService } from 'src/app/services/lugar.service';
import { ParteService } from 'src/app/services/parte.service';
import { PeleaService } from 'src/app/services/pelea.service';

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

  constructor(private demonioService: DemonioService, private lugarService: LugarService,
    private parteService:ParteService, private peleaService:PeleaService) {
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
        console.log(this.demonios);
      }
    );
    this.demonioService.getDerrotados().subscribe(
      derrotados => {
        this.derrotados = derrotados;
        console.log(this.derrotados);
      }
    );
      this.demonioService.getInvictos().subscribe(
        invictos => {
          this.invictos = invictos;
          console.log(this.invictos);
          this.calculatePercentages();
          this.generateChart(this.derrotados.length, this.invictos.length);
        }
    );
    this.lugarService.getLugares().subscribe(
      lugares => this.lugares = lugares
    );
    this.parteService.getPartes().subscribe(
      partes => this.partes = partes
    );
    this.peleaService.getPeleas().subscribe(
      peleas => {
        this.peleas = peleas;
        console.log(peleas);
      }
    );
  }

  calculatePercentages() {
    let total = this.derrotados.length + this.invictos.length;
    total === 0 ? this.porcentajeD = 0 : this.porcentajeD = Math.round(this.derrotados.length / (total/100));
    total === 0 ? this.porcentajeI = 0 : this.porcentajeI = Math.round(this.invictos.length / (total/100));
  }

  delete(demonio: Demonio): void{
    Swal.fire(
      {
        title: '¿Estás seguro, Hyakkimaru?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fa5c7c',
        cancelButtonColor: '#0acf97',
        confirmButtonText: 'Sí, estoy seguro.',
        cancelButtonText: 'Está bien, no lo haré.'
      }
    ).then(
      (result) => {
        if (result.isConfirmed) {
          this.lugarService.delete(demonio.id!).subscribe(
            response => {
              this.demonios = this.demonios.filter(cli => cli != demonio);
              Swal.fire(
                {
                  title: '¡Genial!',
                  text: '¡El demonio ha sido eliminado!',
                  icon: 'success',
                  confirmButtonText: 'Desaparece de mi vista'
                }
              );
            }
          );
        }
      }
    );
  }

  generateChart(d:number, i:number) {
    this.canvas = document.getElementById('demonsChart');
    this.ctx = this.canvas.getContext('2d');
    this.chart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        labels: ['Derrotados', 'No derrotados'],
        datasets: [
          {
            data: [d, i],
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
