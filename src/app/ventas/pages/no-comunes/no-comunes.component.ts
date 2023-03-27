import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  //i18nSelect pipe
  nombre:string = 'Juan'
  genero:string = 'masculino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': ' invitarla'
  }

  //i18nPlural pipe
  clientes:string[] = ['María','Juan','Pedro','Susana', 'Carlos'];

  clientesMapa = {
    '=0': 'No tenemos nigun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
