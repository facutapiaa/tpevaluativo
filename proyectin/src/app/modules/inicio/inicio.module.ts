import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    InicioComponent,
    CardsComponent,
    CarruselComponent
  ]
})
export class InicioModule { }
