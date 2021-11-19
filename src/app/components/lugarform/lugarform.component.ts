import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Lugar } from 'src/app/models/Lugar';
import { LugarService } from 'src/app/services/lugar.service';

@Component({
  selector: 'app-lugarform',
  templateUrl: './lugarform.component.html',
  styleUrls: ['./lugarform.component.scss']
})
export class LugarformComponent implements OnInit {
  lugar: Lugar;
  constructor(private lugarService: LugarService, private router: Router, private activate: ActivatedRoute) {
    this.lugar = new Lugar(0, '');
  }

  ngOnInit(): void {
    this.cargarLugar();
  }

  cargarLugar(): void {
    this.activate.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.lugarService.getLugar(id).subscribe(
            lugar => this.lugar = lugar
          );
        }
      }
    );
  }

  create(): void {
    this.lugarService.create(this.lugar).subscribe(
      response => {
        this.router.navigate(['/lugares']);
        Swal.fire(
          {
            title: '¡Genial!',
            text: '¡Nuevo lugar registrado!',
            icon: 'success',
            confirmButtonText: 'Desaparece de mi vista'
          }
        );
      }
    );
  }

  createAnother(): void{
    this.lugarService.create(this.lugar).subscribe(
      response => {
        this.lugar = new Lugar(0, '');
        this.router.navigate(['/lugares/crear']);
        Swal.fire(
          {
            title: '¡Genial!',
            text: '¡Nuevo lugar registrado!',
            icon: 'success',
            confirmButtonText: 'Desaparece de mi vista'
          }
        );
      }
    );
  }

  update(): void {
    this.lugarService.update(this.lugar).subscribe(
      response => {
        this.router.navigate(['/lugares']);
        Swal.fire(
          {
            title: '¡Genial!',
            text: '¡El lugar ha sido actualizado!',
            icon: 'success',
            confirmButtonText: 'Desaparece de mi vista'
          }
        );
      }
    );
  }

}
