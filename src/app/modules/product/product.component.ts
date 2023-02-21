import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

// Importamos nuestro servicio ProductServiceService
import { ProductServiceService } from '../../services/product-service.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent {

  /* Se declaran las variables inicializando con ! */
  id!: number;
  product!: any; 

  /* Traemos el servicio ProductServiceService y las rutas, que deben estar importadas arriba */
  constructor(private productService: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) {}

 /* función que escucha la ruta activa y la guarda en la variable id */
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe(params=> {
    this.id = Number(params.get('id'));
  })

  /* función que llama al servicio  (getProduct) y recibe el id almacenado en la variable*/
  this.productService.getProduct(this.id).subscribe((data: any)=> {
    this.product = data;
  })
}    

/* función para borrar el producto seleccionado.
Fuera del onInit (porque no se incia con la aplicación, si no al hacer click) 
Llama de nuevo al servicio y utiliza el método .delete que borrará ese id
y redirige a la página principal de productos .navigate(["/"])*/

deleteProduct(){
this.productService.deleteProduct(this.id).subscribe((data: any)=> {
  this.router.navigate(["/"]);
})
}

}

