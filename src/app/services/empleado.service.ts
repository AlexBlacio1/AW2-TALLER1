import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  private API_EMPLEADO = 'https://api.sampleapis.com/futurama/characters'


  getEmpleado(): Observable <any>{
    return this.http.get(this.API_EMPLEADO)
  }

  getUnicoEmpleado(id: any): Observable<any>{
    return this.http.get(`${this.API_EMPLEADO}/${id}`)
  }

}
