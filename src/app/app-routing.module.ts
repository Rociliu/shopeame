import { ProductsComponent } from './modules/products/products.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './modules/gestion/gestion.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products", component: ProductsComponent},
  {path: "gestion", component: GestionComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
