import { Component } from '@angular/core';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-lista-productos-component',
  standalone: false,
  styleUrl: './lista-productos-component.css',
  templateUrl: './lista-productos-component.html',
})
export class ListaProductosComponent {

  public producto!: Producto;
  public productos!: Array<Producto>;

  constructor(){
    this.producto = new Producto("Monitor", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSartmhAyVgXfrwG8CumonGGvJvO5LT2y_nXpujfqausKq295irBeNTkXparSaKj8hjtqfEYVmi4fJZmxo--Cm4ji245pY6xEqm7MTNFuofgfDFBXi3Lsm36gV__vXd0BTsxxtq5Tiwbw&usqp=CAc", 200.50)
    this.productos = [
      new Producto(
        "Nike Air Jordan",
        "https://images.zapantojos.com/media/2022/07/39253d37.jpg",
        150
      ),
      new Producto(
        "Nike Air Mag",
        "https://limitedresell.com/img/anblog/b/b-654d14cfc06f5-anblog_thumb.jpg",
        1900
      ),	  
      new Producto(
        "New Balance 998",
        "https://www.sneakers-actus.fr/wp-content/uploads/2023/06/NB-998-U998TE-x-Teddy-Santis-Plum-Purple-MIUSA.jpg",
        140
      ),
      new Producto(
        "J-Hayber Olimpo",
        "https://jhayber.com/documents/images/products/63638-850-1.jpg",
        60
      ),
      new Producto(
        "Cangrejeras",
        "https://tonipons.com/cdn/shop/files/CALA_CRISTAL__0.webp",
        10
      )
    ]
  }



}
