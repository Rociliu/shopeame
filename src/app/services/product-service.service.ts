/* Importamos el HttpClient */
import { HttpClient } from '@angular/common/http';

/* Importamos la interfaz Observable */
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

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(productsUrl);
  }


  //Con este servicio se obtiene la url y el id del producto 
  getProduct(id:number) {
    return this.http.get(`${productsUrl}/${id}`);
  }

  deleteProduct(id:number) {
    return this.http.delete(`${productsUrl}/${id}`);
  }

}


