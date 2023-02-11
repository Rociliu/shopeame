import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { GestionComponent } from './gestion/gestion.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './gestion/detail/detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    GestionComponent,
    ProductComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
