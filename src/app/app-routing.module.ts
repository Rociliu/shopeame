import { ProductComponent } from './modules/product/product.component';
import { ProductsComponent } from './modules/products/products.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './modules/gestion/gestion.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'gestion', loadChildren: () => import('./modules/gestion/gestion.module').then(m => m.GestionModule) },
  
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
