import { Component, OnInit } from '@angular/core';
import { ParteService } from 'src/app/services/parte.service';
import Swal from 'sweetalert2';
import { Parte } from 'src/app/models/Parte';


@Component({
  selector: 'app-partelist',
  templateUrl: './partelist.component.html',
  styleUrls: ['./partelist.component.scss']
})
export class PartelistComponent implements OnInit {
  tableData: Parte[];
  cols: any[]
  first = 0;
  rows = 10;
  constructor(private parteService: ParteService) {
    this.tableData = [];
    this.cols = [];
  }

  ngOnInit(): void {
    this.parteService.getPartes().subscribe(
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
        header: 'Parte'
      },
      {
        field: 'demonio',
        header: 'Demonio que la posee'
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

  delete(parte: Parte): void{
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
          this.parteService.delete(parte.id).subscribe(
            response => {
              this.tableData = this.tableData.filter(cli => cli != parte);
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
