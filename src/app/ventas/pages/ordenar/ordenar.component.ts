import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayusculas:boolean = true;

  cambiarMayusculas(){
    this.enMayusculas = !this.enMayusculas;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
