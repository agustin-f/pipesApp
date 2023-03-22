import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  fecha:Date = new Date();

  nombreLower:string = 'maría'
  nombreUpper:string = 'MARÍA'
  nombreCompleto:string = 'MaRíA FerNanDez'

  constructor() { }

  ngOnInit(): void {
  }

}
