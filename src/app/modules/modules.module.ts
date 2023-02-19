import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Importamos los Componentes */
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { GestionComponent } from './gestion/gestion.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './gestion/detail/detail.component';
import { FeaturedProductsComponent } from './home/featured-products/featured-products.component';
/*Importamos los módulos para el formulario*/
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    GestionComponent,
    ProductComponent,
    DetailComponent,
    FeaturedProductsComponent
  ],
  imports: [
    //importo el AppRoutingModule:
    AppRoutingModule,
    CommonModule,  
    //Importamos los módulos para el formulario, al igual que en app.module.ts
    FormsModule,
    ReactiveFormsModule
  ]

  
})
export class ModulesModule { }