import { Component } from '@angular/core';
import { Camisetas } from 'src/app/models/camisetas';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public cards: Camisetas[]

  constructor() {
    this.cards = [
      {
        id: "Camiseta de Riquelme ",
        club: "Boca",
        año: 2000,
        talle:"M",
        img:"https://acdn.mitiendanube.com/stores/001/312/744/products/etyrutyouiop1-59a5cd8409ed10b13016596299805134-640-0.png",
        alt:"Camiseta de Riquelme 2000",
        precio:33,
      },
      {
        id: "Camiseta de Riquelme ",
        club: "Boca",
        año: 2000,
        talle:"M",
        img:"https://acdn.mitiendanube.com/stores/001/312/744/products/etyrutyouiop1-59a5cd8409ed10b13016596299805134-640-0.png",
        alt:"Camiseta de Riquelme 2000",
        precio:33,
      },
      {
        id: "Camiseta de Riquelme ",
        club: "Boca",
        año: 2000,
        talle:"M",
        img:"https://acdn.mitiendanube.com/stores/001/312/744/products/etyrutyouiop1-59a5cd8409ed10b13016596299805134-640-0.png",
        alt:"Camiseta de de Riquelme 2000",
        precio:33,
      },
      {
        id: "Camiseta de Riquelme ",
        club: "Boca",
        año: 2000,
        talle:"M",
        img:"https://acdn.mitiendanube.com/stores/001/312/744/products/etyrutyouiop1-59a5cd8409ed10b13016596299805134-640-0.png",
        alt:"Camiseta de de Riquelme 2000",
        precio:33,
      },
      {
        id: "Camiseta de Riquelme ",
        club: "Boca",
        año: 2000,
        talle:"M",
        img:"https://acdn.mitiendanube.com/stores/001/312/744/products/etyrutyouiop1-59a5cd8409ed10b13016596299805134-640-0.png",
        alt:"Camiseta de de Riquelme 2000",
        precio:33,
      },
      {
        id: "Camiseta de Riquelme ",
        club: "Boca",
        año: 2000,
        talle:"M",
        img:"https://acdn.mitiendanube.com/stores/001/312/744/products/etyrutyouiop1-59a5cd8409ed10b13016596299805134-640-0.png",
        alt:"Camiseta de de Riquelme 2000",
        precio:33,
      },
      {
        id: "Camiseta de Riquelme ",
        club: "Boca",
        año: 2000,
        talle:"M",
        img:"https://acdn.mitiendanube.com/stores/001/312/744/products/etyrutyouiop1-59a5cd8409ed10b13016596299805134-640-0.png",
        alt:"Camiseta de de Riquelme 2000",
        precio:33,
      },
    ]
  }
}

