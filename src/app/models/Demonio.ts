import { Lugar } from "./Lugar";
import { Parte } from "./Parte";
import { Pelea } from "./Pelea";

export class Demonio{
  constructor(public id?: number, public nombre?: string, public imagen?: string,
    public derrotado?: boolean, public fechaCreacion?: Date, public fechaDerrotado?: Date,
    public listaPeleas?: Pelea[], public parte?: Parte, public lugar?:Lugar) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.derrotado = derrotado;
    this.listaPeleas = listaPeleas;
    this.parte = parte;
    this.lugar = lugar;
    this.fechaCreacion = fechaCreacion;
    this.fechaDerrotado = fechaDerrotado;
  }
}
