import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../../modelos/empleado';
import { EmpleadoService } from '../../servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  nuevoEmpleado: Empleado = {
    id: 0,
    nombres: '',
    apellidos: '',
    edad: 0,
    genero: '',
    estado_civil: '',
    activo: ''
  };

  constructor(
    private router: Router,
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit(): void {
  }

  createEmpleado(): void {
    this.empleadoService.createEmpleado(this.nuevoEmpleado)
      .subscribe(() => {
        console.log('Empleado creado correctamente');
        this.router.navigate(['/empleados']); // Redirige a la lista de empleados después de crear
      });
  }
}
