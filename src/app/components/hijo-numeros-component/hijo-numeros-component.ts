import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-numeros-component',
  standalone: false,
  styleUrl: './hijo-numeros-component.css',
  templateUrl: './hijo-numeros-component.html',
})
export class HijoNumerosComponent{

  @Input() numero!: number;
  @Output() sumarNumero: EventEmitter<any> = new EventEmitter();

}
