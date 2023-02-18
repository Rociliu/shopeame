import { ProductsComponent } from './modules/products/products.component';
import { GestionComponent } from './modules/gestion/gestion.component';
import { HomeComponent } from './modules/home/home.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Importamos el modulo Modules */
import { ModulesModule } from './modules/modules.module';

/* Importamos el AppRoutingModule */
import { AppRoutingModule } from './app-routing.module';

/* Importamos los Componentes */
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

/* Importamos el HttpClientModule */
import { HttpClientModule } from '@angular/common/http';

/* Importamos el ProductServiceService */
import { ProductServiceService } from './services/product-service.service';
import { ProductComponent } from './modules/product/product.component';

/* importar CambioModoService */



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, 
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,

    /* Importamos el HttpClientModule */
    HttpClientModule
  ],
  /* Añadimos ProductServiceService al provider */
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
