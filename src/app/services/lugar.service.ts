import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Lugar } from '../models/Lugar';

@Injectable({
  providedIn: 'root'
})
export class LugarService {
  private urlEndPoint = 'https://dororo-api.herokuapp.com/api/lugares/';
  private header = new HttpHeaders(
    {
      'Content-type': 'application/json'
    }
  );

  constructor(private http: HttpClient) { }

  getLugares(): Observable<Lugar[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response)=>response as Lugar[])
    );
  }

  create(lugar: Lugar): Observable<Lugar>{
    return this.http.post<Lugar>(
      this.urlEndPoint,
      lugar,
      { headers: this.header }
    );
  }

  update(lugar: Lugar):Observable<Lugar> {
    return this.http.put<Lugar>(
      `${this.urlEndPoint}${lugar.id}`,
      lugar,
      {
        headers: this.header
      }
    );
  }

  delete(id: number): Observable<Lugar>{
    return this.http.delete<Lugar>(
      this.urlEndPoint + id.toString(),
      {
        headers: this.header
      }
    );
  }

  getLugar(id: number): Observable<Lugar>{
    return this.http.get<Lugar>(
      this.urlEndPoint + id.toString()
    );
  }
}
