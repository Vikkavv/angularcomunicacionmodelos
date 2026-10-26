import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deporte-component',
  standalone: false,
  styleUrl: './deporte-component.css',
  templateUrl: './deporte-component.html',
})
export class DeporteComponent {

  @Input() deporte!: string;
  @Output() setFavorito: EventEmitter<any> = new EventEmitter();


  mostrarFavorito(): void{
    this.setFavorito.emit(this.deporte);
  }

}
