
 import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
 import { Router } from '@angular/router';

 import { Empleado } from '../../modelos/empleado';
 import { EmpleadoService } from '../../servicios/empleado.service';

 @Component({
   selector: 'app-lista-empleados',
   templateUrl: './lista-empleados.component.html',
   styleUrls: ['./lista-empleados.component.css']
 })
 export class ListaEmpleadosComponent implements OnInit {
   empleados: Empleado[] = [];

   constructor
   (
    private empleadoService: EmpleadoService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

   ngOnInit(): void {
     this.empleadoService.getEmpleados().subscribe(empleados => {
       this.empleados = empleados;
     });
   }

   newEmpleado(): void {
    this.router.navigate(['/nuevoempleado']);
  }
 }
