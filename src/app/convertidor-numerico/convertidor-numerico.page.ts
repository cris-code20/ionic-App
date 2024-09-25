import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor-numerico',
  templateUrl: './convertidor-numerico.page.html',
  styleUrls: ['./convertidor-numerico.page.scss'],
})
export class ConvertidorNumericoPage {

  numero: number = 0;  // Número ingresado por el usuario
  resultado: string = '';  // Resultado de la traducción

  constructor() { }

  traducirNumeroALetras(num: number): string {
    // Arreglos con las palabras para unidades, decenas y centenas.
    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const especiales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
    const decenas = ['', '', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    if (num < 1 || num > 1000) {
      return 'Número fuera de rango';
    }

    if (num === 1000) {
      return 'mil';
    }

    if (num < 10) {
      return unidades[num];
    }

    if (num < 20) {
      return especiales[num - 10];
    }

    if (num < 30) {
      return num === 20 ? 'veinte' : `veinti${unidades[num - 20]}`;
    }

    if (num < 100) {
      return num % 10 === 0
        ? decenas[Math.floor(num / 10)]
        : `${decenas[Math.floor(num / 10)]} y ${unidades[num % 10]}`;
    }

    if (num < 1000) {
      const centena = Math.floor(num / 100);
      const resto = num % 100;

      if (num === 100) {
        return 'cien';
      }

      return resto === 0
        ? centenas[centena]
        :`  ${centenas[centena]} ${this.traducirNumeroALetras(resto)}`;
    }

    return ''; // Caso que nunca debería alcanzarse.
  }

  // Función que se llama al presionar el botón para traducir
  onTraducir(): void {
    this.resultado = this.traducirNumeroALetras(this.numero);
  }
}
