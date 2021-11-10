import { Demonio } from "./Demonio";

export class Parte {
  constructor(public id: number, public nombre: string,
    public demonio:Demonio) {
    this.id = id;
    this.nombre = nombre;
    this.demonio = demonio;
  }
}
