import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ArgentinaComponent } from './pages/argentina/argentina.component';
import { BarcelonaComponent } from './pages/barcelona/barcelona.component';
import { MadridComponent } from './pages/madrid/madrid.component';
import { BocaComponent } from './pages/boca/boca.component';



@NgModule({
  declarations: [
    ArgentinaComponent,
    BarcelonaComponent,
    MadridComponent, 
    BocaComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
