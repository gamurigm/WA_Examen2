import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Murillo_Gabriel_Ex2_IMC';

  peso: number = 40;
  altura: number = 1.7; // Altura por defecto en metros

  get imc(): number {
    return +(this.peso / (this.altura * this.altura)).toFixed(2);
  }

  get categoriaIMC(): string {
    const imc = this.imc;
    if (imc < 18.5) return 'Bajo peso';
    if (imc < 25) return 'Normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidad';
  }

  get colorCategoria(): string {
    const imc = this.imc;
    if (imc < 18.5) return '#2196f3'; // Azul
    if (imc < 25) return '#4caf50'; // Verde
    if (imc < 30) return '#ff9800'; // Naranja
    return '#f44336'; // Rojo
  }

  incrementarPeso() {
    this.peso++;
  }

  decrementarPeso() {
    if (this.peso > 40) this.peso--;
  }

  reiniciarPeso() {
    this.peso = 40;
  }

  setPesoManual(valor: string) {
    const num = Number(valor);
    if (!isNaN(num) && num >= 40) {
      this.peso = num;
    }
  }

  setAlturaManual(valor: string) {
    const num = Number(valor);
    if (!isNaN(num) && num > 0) {
      this.altura = num;
    }
  }
}
