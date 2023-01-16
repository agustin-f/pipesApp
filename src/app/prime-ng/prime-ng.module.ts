import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button'; // importarlo
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule
  ],
  imports: [
    CommonModule
  ]
})
export class PrimeNgModule { }
