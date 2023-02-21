import { Component, OnInit } from '@angular/core';

/* Importamos el servicio ProductServiceService */
import { ProductServiceService } from '../../services/product-service.service';

/* Importamos la interfaz Product */
import { Product } from '../../interfaces/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})


export class ProductsComponent implements OnInit {


  /* cambio modo lista/cuadrícula: */
  cuadricula: boolean = true;
    //función para el botón de seleccionar vista Lista
    cambioLista() {
      this.cuadricula = false;
    }
    //función para el botón de seleccionar vista cuadrícula
    cambioCuadricula() {
        this.cuadricula = true;
      }
  /* fin cambio modo vista lista/cuadrícula */



  /* Inicio pintar productos: */
  productsList: Product[] = [];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productsList = data;
    });

    /* fin pintar productos */  
  }
}