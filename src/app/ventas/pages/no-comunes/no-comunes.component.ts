import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  nombre:string = 'Juan'
  genero:string = 'masculino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': ' invitarla'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
