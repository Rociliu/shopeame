import { Component, Input } from '@angular/core';
import { Product } from './../../interfaces/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: Product;

  /* Declaramos que el input va a ser un objeto igual que Product*/
  constructor() {
    this.product = {} as Product;
  }
}
