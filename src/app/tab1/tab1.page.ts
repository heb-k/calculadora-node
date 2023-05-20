import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  resultado : number;
  numdig : number;
  numdig2 : number;
  constructor() {}

  mais() {
    this.resultado = this.numdig + this.numdig2;
    console.log("resultado:", this.resultado);
  }

  menos() {
    this.resultado = this.numdig - this.numdig2;
    console.log("resultado:", this.resultado);
  }

  dobro() {
    this.resultado = this.numdig * this.numdig2;
    console.log("resultado:", this.resultado);
  }

  divisao() {
    this.resultado = this.numdig / this.numdig2;
    console.log("resultado:", this.resultado);
  }

  resto() {
    this.resultado = this.numdig % this.numdig2;
    console.log("resultado:", this.resultado);
  }

  

}
