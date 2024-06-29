import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ArgentinaComponent } from './pages/argentina/argentina.component';
import { EspanaComponent } from './pages/espana/espana.component';
import { SeleccionesComponent } from './pages/selecciones/selecciones.component';
import { InglaterraComponent } from './pages/inglaterra/inglaterra.component';



@NgModule({
  declarations: [
    ArgentinaComponent,
    EspanaComponent,
    SeleccionesComponent,
    InglaterraComponent,

  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
