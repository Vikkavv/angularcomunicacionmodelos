import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deporte-component',
  standalone: false,
  styleUrl: './deporte-component.css',
  templateUrl: './deporte-component.html',
})
export class DeporteComponent {

  @Input() deporte!: string;
  public mensaje!: string;


  mostrarFavorito(): void{
    this.mensaje = "El deporte favorito es: " + this.deporte
  }

}
