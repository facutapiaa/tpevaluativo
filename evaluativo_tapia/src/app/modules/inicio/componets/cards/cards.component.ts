import { Component } from '@angular/core';
import { Camisetas } from '../../../../models/camisetas';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

    //propiedad publica (tipo array)
    public info: Camisetas[]

  constructor() {
    this.info = [
      {
        id: "",
        año: 1,
        club: "pedro",
        talle: "pitbull",
        img: "https://www.elmueble.com/medio/2023/03/07/perro-de-raza-pitbull-blue_736b92b8_230307213909_1000x667.jpg",
        alt: "perro gordito"
      },
      {
        id: "",
        año: 1,
        club: "pedro",
        talle: "pitbull",
        img: "https://www.elmueble.com/medio/2023/03/07/perro-de-raza-pitbull-blue_736b92b8_230307213909_1000x667.jpg",
        alt: "perro gordito"
      },
     
    ]
  }
}
