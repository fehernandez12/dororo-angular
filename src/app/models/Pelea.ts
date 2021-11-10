import { Demonio } from "./Demonio";

export class Pelea {
  constructor(public id: number, public ganada: boolean,
  public demonio:Demonio) {
    this.id = id;
    this.ganada = ganada;
    this.demonio = demonio;
  }
}
