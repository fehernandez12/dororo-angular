import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Demonio } from 'src/app/models/Demonio';
import { DemonioService } from 'src/app/services/demonio.service';
import { Parte } from 'src/app/models/Parte';
import { ParteService } from 'src/app/services/parte.service';
import { Lugar } from 'src/app/models/Lugar';
import { LugarService } from 'src/app/services/lugar.service';

@Component({
  selector: 'app-demonioscrud',
  templateUrl: './demonioscrud.component.html',
  styleUrls: ['./demonioscrud.component.scss']
})
export class DemonioscrudComponent implements OnInit {
  demonDialog: boolean;
  demonios: Demonio[];
  demonio: Demonio;
  selected: Demonio[];
  lugares: Lugar[];
  partes: Parte[];
  cols: any[];

  constructor(private demonioService: DemonioService, private lugarService: LugarService,
    private parteService:ParteService, private router: Router, private activate: ActivatedRoute) {
    this.demonios = [];
    this.lugares = [];
    this.partes = [];
    this.demonio = new Demonio();
    this.selected = [];
    this.cols = [];
    this.demonDialog = false;
  }

  ngOnInit(): void {
    this.lugarService.getLugares().subscribe(
      lugares => this.lugares = lugares
    );
    this.parteService.getPartesLibres().subscribe(
      partes => this.partes = partes
    );
    this.demonioService.getDemonios().subscribe(
      demonios => this.demonios = demonios
    );
    this.cols = [
      {
        field: 'id',
        header: 'ID'
      },
      {
        field: 'nombre',
        header: 'Nombre del demonio'
      },
      {
        field: 'lugar.nombre',
        header: 'Ubicación'
      },
      {
        field: 'parte.nombre',
        header: 'Parte que posee'
      },
      {
        field: 'derrotado',
        header: 'Estado actual'
      }
    ];
  }

  openNew(): void{
    this.demonDialog = true;
  }

  save() {
    if (!this.demonio.id) {
      this.demonioService.create(this.demonio).subscribe(
        response => {
          this.demonDialog = false;
          this.router.navigate(['/']);
          Swal.fire(
            {
              title: '¡Genial!',
              text: '¡Nuevo demonio registrado!',
              icon: 'success',
              confirmButtonText: 'Desaparece de mi vista'
            }
          );
        }
      );
    }
    else {
      this.demonioService.update(this.demonio).subscribe(
        response => {
          this.demonDialog = false;
          this.router.navigate(['/demonios']);
          Swal.fire(
            {
              title: '¡Genial!',
              text: '¡El demonio ha sido actualizado!',
              icon: 'success',
              confirmButtonText: 'Desaparece de mi vista'
            }
          );
        }
      );
    }
  }

  derrotar(demonio: Demonio): void{
    Swal.fire(
      {
        title: '¿Estás seguro, Hyakkimaru?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fa5c7c',
        cancelButtonColor: '#0acf97',
        confirmButtonText: 'Sí, ya lo derroté.',
        cancelButtonText: 'Está bien, estoy mintiendo.'
      }
    ).then(
      (result) => {
        if (result.isConfirmed) {
          this.demonioService.derrotar(demonio).subscribe(
            response => {
              this.router.navigate(['/']);
              Swal.fire(
                {
                  title: '¡Genial!',
                  text: '¡Derrotaste a ' + demonio.nombre + '!',
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

  deleteSelected() {
    Swal.fire(
      {
        title: '¿Estás seguro, Hyakkimaru?',
        text: 'Vas a eliminar todos los registros seleccionados. Esta acción no se puede deshacer.',
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
          for (const item of this.selected) {
            this.delete(item, false);
          }
        }
      }
    );
  }

  delete(demonio: Demonio, alert?:boolean): void{
    if (alert) {
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
    else {
      this.lugarService.delete(demonio.id!).subscribe(
        response => {
          this.demonios = this.demonios.filter(cli => cli != demonio);
          Swal.fire(
            {
              title: '¡Genial!',
              text: '¡Los demonios han sido eliminados!',
              icon: 'success',
              confirmButtonText: 'Desaparece de mi vista'
            }
          );
        }
      );
    }
  }

  update(demonio: Demonio): void{
    this.demonio = { ...demonio };
    this.demonDialog = true;
  }

}
