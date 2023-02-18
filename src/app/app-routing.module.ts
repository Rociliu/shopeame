import { ProductComponent } from './modules/product/product.component';
import { ProductsComponent } from './modules/products/products.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './modules/gestion/gestion.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "gestion", component: GestionComponent},
  {path: "products/:id", component: ProductComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
