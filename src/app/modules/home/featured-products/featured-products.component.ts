import { Component, Input } from '@angular/core';

/* Importamos la interfaz de datos */
import { FeaturedProductSection } from '../../../interfaces/interface';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent {
  @Input() productsList!: FeaturedProductSection;
}
