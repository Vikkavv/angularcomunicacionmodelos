import { Component } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-padre-coches-component',
  standalone: false,
  styleUrl: './padre-coches-component.css',
  templateUrl: './padre-coches-component.html',
})
export class PadreCochesComponent {
  public coches!: Array<Coche>;

  constructor() {
    this.coches = [
      new Coche("Ford", "Mustang", 0, 30),
      new Coche("VolksWagen", "Polo", 0, 10),
      new Coche("Lamborguini", "Aventador", 0, 70)
    ]
  }
}
