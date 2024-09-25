import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicacion',
  templateUrl: './tabla-multiplicacion.page.html',
  styleUrls: ['./tabla-multiplicacion.page.scss'],
})
export class TablaMultiplicacionPage{

  numero: number = 0;
  tabla: number[] = Array.from({ length: 13 }, (_, i) => i + 1);

  constructor() { }

  generarTabla() {
    if (!this.numero || this.numero < 1 || this.numero > 1000) {
      this.tabla = [];
      return;
    }
  }

}
