import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Empleado } from '../../modelos/empleado';
import { EmpleadoService } from '../../servicios/empleado.service';

@Component({
  selector: 'app-ficha-empleado',
  templateUrl: './ficha-empleado.component.html',
  styleUrls: ['./ficha-empleado.component.css']
})
export class FichaEmpleadoComponent implements OnInit {
  empleado: Empleado | undefined;

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getEmpleado();
  }

  getEmpleado(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.empleadoService.getEmpleado(id)
      .subscribe(empleado => this.empleado = empleado);
  }

  updateEmpleado(): void {
    if (this.empleado) {
      console.log(this.empleado);
      this.empleadoService.updateEmpleado(this.empleado)
        .subscribe(() => {
          console.log('Empleado actualizado correctamente');
          this.router.navigate(['/empleados']);
        });
    }
  }

  backList(): void {
    this.router.navigate(['/empleados']);
  }

}
