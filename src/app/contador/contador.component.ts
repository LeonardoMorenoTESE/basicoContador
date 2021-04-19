import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  
  title: String = 'Web Contador';
  numero: number = 10;
  base: number = 5;

  constructor() { }

  ngOnInit(): void {
  }


  acumular(valor: number){

    this.numero += valor;

  }
/*
  sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
  }
  */

}
