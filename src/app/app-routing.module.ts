import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'gestion', loadChildren: () => import('./modules/gestion/gestion.module').then(m => m.GestionModule) },
  { path: 'products/:id', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  // { path: "products/:id", component: ProductComponent},
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
