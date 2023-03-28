import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

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

  cambiarPersona(){
    this.nombre = 'María';
    this.genero = 'femenino';
  }

  eliminarCliente(){
    this.clientes.shift();
  }

  //Key Value Pipe
  persona = {
    nombre: 'Josefina',
    edad: '42',
    direccion: 'Buenos Aires, Argentina'
  }

  //Json pipe
  heroes = [
    {
      nombre: ' Superman',
      vuela: true
    },
    {
      nombre: 'Capitan América',
      vuela: true
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }

  ]

  //Async Pipe
  miObservable = interval(1000).pipe(tap(()=> console.log('intervalo')));

  valorePromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Esta es la data de nuestra promesa')
    },3500)
  })

}
