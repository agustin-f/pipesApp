import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasNetas:number = 234534576.7890;
  porcentaje:number = 0.4856;

  constructor() { }

  ngOnInit(): void {
  }

}
