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

  productsList!: Product[];

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.productsList = data;
    });
  }
}