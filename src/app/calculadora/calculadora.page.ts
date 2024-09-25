import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})

export class CalculadoraPage{

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  constructor() { }

  sumar() {
    this.resultado = this.num1 + this.num2;
  }

}


