import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelea } from '../models/Pelea';

@Injectable({
  providedIn: 'root'
})
export class PeleaService {

  private urlEndPoint = 'https://dororo-api.herokuapp.com/api/peleas/';
  private header = new HttpHeaders(
    {
      'Content-type': 'application/json'
    }
  );
  constructor(private http: HttpClient) { }

  getPeleas(): Observable<Pelea[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Pelea[])
    );
  }
}
