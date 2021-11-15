import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Demonio } from '../models/Demonio';

@Injectable({
  providedIn: 'root'
})
export class DemonioService {
  private urlEndPoint: string = 'http://localhost:8081/api/demonios/';

  private header = new HttpHeaders(
    {
      'Content-type': 'application/json'
    }
  );

  constructor(private http: HttpClient) { }

  getDemonios(): Observable<Demonio[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Demonio[])
    );
  }

  getDerrotados(): Observable<Demonio[]>{
    return this.http.get<Demonio[]>(
      this.urlEndPoint + 'derrotados'
    );
  }

  getInvictos(): Observable<Demonio[]>{
    return this.http.get(
      this.urlEndPoint + 'invictos'
    ).pipe(
      map(
        (response) => response as Demonio[]
      )
    );
  }

  create(demonio: Demonio): Observable<Demonio>{
    return this.http.post<Demonio>(
      this.urlEndPoint,
      demonio,
      {
        headers: this.header
      }
    );
  }

  delete(id: number): Observable<Demonio>{
    return this.http.delete<Demonio>(
      this.urlEndPoint + id.toString(),
      {
        headers: this.header
      }
    );
  }

  getDemonio(id: number): Observable<Demonio>{
    return this.http.get<Demonio>(
      this.urlEndPoint + id.toString()
    );
  }

  derrotar(demonio: Demonio): Observable<Demonio>{
    return this.http.patch<Demonio>(
      `${this.urlEndPoint}${demonio.id}`,
      demonio,
      {
        headers: this.header
      }
    );
  }
}
