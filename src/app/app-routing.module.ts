import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { FichaEmpleadoComponent } from './componentes/ficha-empleado/ficha-empleado.component';
import { CrearEmpleadoComponent } from './componentes/crear-empleado/crear-empleado.component';


const routes: Routes = [
  { path: '', redirectTo: '/empleados', pathMatch: 'full' },
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'empleados/:id', component: FichaEmpleadoComponent },
  { path: 'nuevoempleado', component: CrearEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
