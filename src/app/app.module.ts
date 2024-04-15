import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { FichaEmpleadoComponent } from './componentes/ficha-empleado/ficha-empleado.component';
import { CrearEmpleadoComponent } from './componentes/crear-empleado/crear-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    FichaEmpleadoComponent,
    CrearEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
