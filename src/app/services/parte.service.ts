import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Parte } from '../models/Parte';

@Injectable({
  providedIn: 'root'
})
export class ParteService {
  private urlEndPoint = 'https://dororo-api.herokuapp.com/api/partes/';
  private header = new HttpHeaders(
    {
      'Content-type': 'application/json'
    }
  );
  constructor(private http: HttpClient) { }

  getPartes(): Observable<Parte[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Parte[])
    );
  }

  getParte(id: number): Observable<Parte>{
    return this.http.get<Parte>(
      this.urlEndPoint + id.toString()
    );
  }

  getPartesLibres(): Observable<Parte[]>{
    return this.http.get(
      this.urlEndPoint + 'unassigned'
    ).pipe(
      map((response) => response as Parte[])
    );
  }

  create(parte: Parte): Observable<Parte>{
    return this.http.post<Parte>(
      this.urlEndPoint,
      parte,
      {
        headers: this.header
      }
    );
  }

  update(parte: Parte): Observable<Parte>{
    return this.http.put<Parte>(
      `${this.urlEndPoint}${parte.id}`,
      parte,
      {
        headers: this.header
      }
    );
  }

  delete(id: number): Observable<Parte>{
    return this.http.delete<Parte>(
      this.urlEndPoint + id.toString(),
      {
        headers: this.header
      }
    );
  }
}
