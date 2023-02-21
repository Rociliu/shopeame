import { Component, Input } from '@angular/core';
import { Product } from './../../../interfaces/interface';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() product: Product;

  /*Declaramos que el input va a ser un objeto igual que nuestra interfaz Product*/
  constructor() {
    this.product = {} as Product;
  }

}
