import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

// Importamos nuestro servicio ProductServiceService
import { ProductServiceService } from '../../services/product-service.service';

// Importamos la interfaz Product
import { Product } from '../../interfaces/interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  id!: number;
  product!: any; 

  constructor(private productService: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) {}
    
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params=> {
    this.id = Number(params.get('id'));
  })

  this.productService.getProduct(this.id).subscribe((data: any)=> {
    this.product = data;
  })
}    


}

