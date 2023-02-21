import { GestionComponent } from './../../../../../SOLUCIONES-ANGULAR/Front/7.projectoFinal/7.projecto/src/app/pages/gestion/gestion.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';


@NgModule({
  declarations: [
    LazyloadingRoutingModule,
    LazyloadingModule
  ],

  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class GestionComponent { }
