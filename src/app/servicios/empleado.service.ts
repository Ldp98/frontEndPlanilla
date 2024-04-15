import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../modelos/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  private apiUrl = 'https://localhost:7197/api/Empleados';

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl);
  }

  getEmpleado(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }

  updateEmpleado(empleado: Empleado): Observable<any> {
    return this.http.put(`${this.apiUrl}/${empleado.id}`, empleado);
  }

  createEmpleado(empleado: Empleado): Observable<any> {
    return this.http.post(this.apiUrl, empleado);
  }


}