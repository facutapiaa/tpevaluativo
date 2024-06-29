import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ArgentinaComponent } from './pages/argentina/argentina.component';



@NgModule({
  declarations: [
    ArgentinaComponent,

  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
