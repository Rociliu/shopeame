/* Importamos el HttpClient */
import { HttpClient } from '@angular/common/http';

/* Importamos la interfaz Product */
import { Product } from '../interfaces/interface';


/* Importamos el Injectable */
import { Injectable } from '@angular/core';

/* Importamos el Observable */
import { Observable } from 'rxjs';

const productsUrl = 'https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products';

@Injectable ({
  providedIn: 'root'
})

/* @Injectable() */

export class ProductServiceService {

  /* Creamos store que será un array tipo Product donde se irán añadiendo los productos*/
  store: Product[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }

  
   /* Creamos una función que añade los resultados de la API a store*/
  storeProducts(){
    this.getProducts().subscribe(response => {
      this.store = response;
    })
  }

  
  /* Creamos una función que añade un producto de tipo Product (nuestro objeto) a store*/
  addProduct(product: Product) {
    this.store.push(product);
  }
}


