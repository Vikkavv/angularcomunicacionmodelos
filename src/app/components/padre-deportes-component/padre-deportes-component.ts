import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {

  public deportes!: Array<string>;
  public favorito!: string
  
  setFavorito(event: string): void{
    this.favorito = event;
  }

  constructor(){
    this.deportes = ["Fútbol", "Pádel", "Ténis", "Baloncesto"]
  }

}
