import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  nombre: string = 'IronMan';
  edad: number = 45;

  get nombreMayusculas(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): String {
    return `${this.nombre} - ${this.edad}`;
    //return this.nombre +' - '+ this.edad;
  }
  cambiarNombre(): void {
    this.nombre ='Spiderman';

  }

  cambiarEdad(): void {
    this.edad = 25;

  }
  constructor() {}

  ngOnInit(): void {}
}
