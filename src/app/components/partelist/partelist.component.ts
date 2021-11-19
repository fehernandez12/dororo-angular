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
  constructor(private parteService: ParteService) {
    this.tableData = [];
  }

  ngOnInit(): void {
    this.parteService.getPartes().subscribe(
      tableData => {
        this.tableData = tableData
      }
    );
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
