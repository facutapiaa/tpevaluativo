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
        temporada: 2000,
        talle:"M",
        img:"https://acdn.mitiendanube.com/stores/001/312/744/products/etyrutyouiop1-59a5cd8409ed10b13016596299805134-640-0.png",
        alt:"Camiseta de Riquelme 2000",
        precio:33,
      },
      {
        id: "Camiseta de Messi",
        club: "FC Barcelona",
        temporada: 2019,
        talle: "L",
        img: "https://static1.cdn-subsidesports.com/2/media/resized/wysiwyg/180_180//archive/pre20/BarcaHSSVapor1920_10.gif",
        alt: "Camiseta de Messi 2019",
        precio: 150,
      },
      {
        id: "Camiseta de Halland",
        club: "Manchester city",
        temporada: 2022,
        talle: "M",
        img: "https://cf.camisetasfutbol.com.cn/upload/ttmall/img/20240520/38e455699c8dc5714ba2ea0e388906c4.png=z-450,450_f-webp",
        alt: "Camiseta de De Halland 2023",
        precio: 200,
      },
      {
        id: "Camiseta de Cristiano Ronaldo",
        club: "Real Madrid",
        temporada: 2016,
        talle: "XL",
        img: "https://cyberriedstore.com/wp-content/uploads/2023/05/Real-madrid-2016-17-purple-jersey-ronaldo-7-product.png",
        alt: "Camiseta de Cristiano Ronaldo 2016",
        precio: 120,
      },
      {
        id: "Camiseta de Maradona",
        club: "Argentina",
        temporada: 1990,
        talle: "L",
        img: "https://acdn.mitiendanube.com/stores/001/312/744/products/fghjkln1-193b34d2e2c579e43f16369501078626-480-0.png",
        alt: "Camiseta de Maradona 1990",
        precio: 140,
      },
      {
        id: "Camiseta de Ødegaard",
        club: "Arsenal",
        temporada: 2022,
        talle: "S",
        img: "https://acdn.mitiendanube.com/stores/001/312/744/products/rq3w54e54rdytuyi1-1c58ac9e5bf69ff14b16820448534107-240-0.png",
        alt: "Camiseta de Ødegaard 2022",
        precio: 180,
      },
      {
        id: "Camiseta de Scaloni",
        club: "Argentina",
        temporada: 2006,
        talle: "M",
        img: "https://acdn.mitiendanube.com/stores/001/312/744/products/whatsapp-image-2023-01-13-at-17-29-11-21-d1c233de4bbfb8b2bf16738324854481-640-0.png",
        alt: "Camiseta de Scaloni 2006",
        precio: 160,
      },
    ]
  }
}

