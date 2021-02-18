import { Component } from '@angular/core';

@Component ({
  selector: 'app-contador',
  template: `
    <h1> {{ titulo }} </h1>
    <h3>La base es: <strong> {{base}} </strong> </h3>

    <button (click)="acumular(+1)"> + {{base}} </button>

    <span> {{numero}} </span>

    <button (click)="acumular(-1)"> - {{base}} </button>
  `
})

export class ContadorComponent {
  titulo = 'Contador App';
  numero = 10;
  base = 5;
  // sumar(){
  //   this.numero += 1;
  // }

  // restar(){
  //   this.numero -= 1;
  // }

  acumular(valor: number): void {
    this.numero += valor * this.base;
  }
}
