import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Parte } from 'src/app/models/Parte';
import { ParteService } from 'src/app/services/parte.service';

@Component({
  selector: 'app-parteform',
  templateUrl: './parteform.component.html',
  styleUrls: ['./parteform.component.scss']
})
export class ParteformComponent implements OnInit {
  parte: Parte;

  constructor(private parteService: ParteService, private router: Router, private activate: ActivatedRoute) {
    this.parte = new Parte(0, '');
  }

  ngOnInit(): void {
    this.cargarParte();
  }

  cargarParte(): void {
    this.activate.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.parteService.getParte(id).subscribe(
            parte => this.parte = parte
          );
        }
      }
    );
  }

  create(): void {
    this.parteService.create(this.parte).subscribe(
      response => {
        this.router.navigate(['/partes']);
        Swal.fire(
          {
            title: '¡Genial!',
            text: '¡Nueva parte registrada!',
            icon: 'success',
            confirmButtonText: 'Desaparece de mi vista'
          }
        );
      }
    );
  }

  update(): void {
    this.parteService.update(this.parte).subscribe(
      response => {
        this.router.navigate(['/partes']);
        Swal.fire(
          {
            title: '¡Genial!',
            text: '¡La parte ha sido actualizada!',
            icon: 'success',
            confirmButtonText: 'Desaparece de mi vista'
          }
        );
      }
    );
  }

}
