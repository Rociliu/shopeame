import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {

  /* Declaramos formulario */
  productFormRegister!: FormGroup

  constructor(
    private FormBuilder: FormBuilder, 
    private productService: ProductServiceService,
    private router: Router) {}

  /* Creamos las variables que obtendrán los datos que se recojan del formulario */
  public productForm = this.productService.productData;
  public productFormId = this.productService.productData.description;

  /* Definimos la construcción del formulario */
ngOnInit (): void {
  this.productFormRegister= this.FormBuilder.group({
    name:[
      this.productForm.name, 
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)]
    ], 
    price:[
      this.productForm.price,
      [Validators.required]
    ], 
    description:[
      this.productForm.description,
      [Validators.required, Validators.maxLength(200)]
    ],
    stars:[
      this.productForm.stars,
      [Validators.required]
    ],
    image:[
      this.productForm.image,
      [Validators.required]
    ]
  })

  /* Actualizamos los cambios */
  this.productFormRegister.valueChanges.subscribe(changes=> {
    this.productForm = changes
  })
}

/* Creamos la función onSubmit */
  onSubmit(){
    console.log(this.productForm); //no me aparece nada en la consola del navegador,
                                  // me da error en la lectura de la propiedad .length en products.html
  }

}
