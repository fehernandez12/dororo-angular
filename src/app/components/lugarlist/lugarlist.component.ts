import { Component, OnInit } from '@angular/core';
import { LugarService } from 'src/app/services/lugar.service';
import Swal from 'sweetalert2';
import { Lugar } from 'src/app/models/Lugar';
import { Table } from 'primeng/table';



@Component({
  selector: 'app-lugarlist',
  templateUrl: './lugarlist.component.html',
  styleUrls: ['./lugarlist.component.scss'],
})

export class LugarlistComponent implements OnInit {
  tableData: Lugar[];
  cols: any[];
  first = 0;
  rows = 10;
  constructor(private lugarService: LugarService) {
    this.tableData = [];
    this.cols = [];
  }

  ngOnInit(): void {
    this.lugarService.getLugares().subscribe(
      tableData => {
        this.tableData = tableData
      }
    );
    this.cols = [
      {
        field: 'id',
        header: 'ID'
      },
      {
        field: 'nombre',
        header: 'Nombre del lugar'
      }
    ];
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean{
    return this.tableData ? this.first === (this.tableData.length - this.rows) : true;
  }

  isFirstPage(): boolean{
    return this.tableData ? this.first === 0 : true;
  }

  delete(lugar: Lugar): void{
    Swal.fire(
      {
        title: '¿Estás seguro, Hyakkimaru?',
        text: 'Esta acción no se puede deshacer.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#fa5c7c',
        cancelButtonColor: '#0acf97',
        confirmButtonText: 'Sí, quiero eliminar esto.',
        cancelButtonText: 'Está bien, no lo haré.'
      }
    ).then(
      (result) => {
        if (result.isConfirmed) {
          this.lugarService.delete(lugar.id).subscribe(
            response => {
              this.tableData = this.tableData.filter(cli => cli != lugar);
              Swal.fire(
                {
                  title: '¡Genial!',
                  text: '¡El lugar ha sido eliminado!',
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

}
