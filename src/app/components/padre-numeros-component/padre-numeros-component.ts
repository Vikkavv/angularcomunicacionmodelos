import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent implements OnInit{

  public numeros!: Array<number>;
  public suma: number = 0;

  ngOnInit(): void {
    this.createRandomNumbers();
  }

  sumarNumero(numero: any): void{
    this.suma += numero;
  }

  generarNumero(): void{
    let random = parseInt(Math.random() * 100+"");
    this.numeros.push(random);
  }

  borrarUltimo(): void{
    this.numeros = this.numeros.slice(0, -1);
  }

  reestablecerSuma(): void{
    this.suma = 0;
  }

  createRandomNumbers(): void{
    let numerosLocal = [];
    for (let i = 0; i < 5; i++) {
        let random = parseInt(Math.random() * 100+"");
        numerosLocal.push(random);
    }
    this.numeros = numerosLocal;
  }

}
