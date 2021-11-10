import { Lugar } from "./Lugar";
import { Parte } from "./Parte";
import { Pelea } from "./Pelea";

export class Demonio{
  id: number;
  nombre: string;
  imagen: string;
  derrotado: boolean;
  listaPeleas: Pelea[];
  parte: Parte;
  lugar: Lugar;
  constructor(id: number, nombre: string, imagen: string,
    derrotado: boolean, fechaCreacion: Date, fechaDerrotado: Date,
    listaPeleas: Pelea[], parte: Parte, lugar:Lugar) {
    this.id = id;
    this.nombre = nombre;
    this.imagen = imagen;
    this.derrotado = derrotado;
    this.listaPeleas = listaPeleas;
    this.parte = parte;
    this.lugar = lugar;
  }
}
