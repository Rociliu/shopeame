import { Product } from './../../interfaces/interface';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent { 

  

  /* Declaramos formulario */
  productFormRegister: FormGroup;

  constructor(private FormBuilder: FormBuilder, private productService: ProductServiceService) {
    this.productFormRegister = this.FormBuilder.group( {
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      price:['', [Validators.required]], 
      description:['',[Validators.required, Validators.maxLength(50)]],
      stars:['',[Validators.required, Validators.min(1), Validators.max(5)]],
      image:['',[Validators.required]]
    })
  }


  /*Llamamos a la función que añade los resultados de la API al store (el array de nuestro servicio) */
  ngOnInit(): void {
    this.productService.storeProducts();
  }



  /* Creamos la función onSubmit y las variables submitted y newProduct que serán utilizadas en la función */
  submitted: boolean = false;
  newProduct!: Product;

  onSubmit(): void {
    this.submitted = true;
    if (this.productFormRegister.valid) {
      this.newProduct = {
        id: null,
        name: this.productFormRegister.get('name')?.value,
        price: this.productFormRegister.get('price')?.value,
        description: this.productFormRegister.get('description')?.value,
        stars: this.productFormRegister.get('stars')?.value,
        image: this.productFormRegister.get('image')?.value,
        // id: this.productFormRegister.get('id')?.value,  --> no incluimos id porque es un dato que no debe añadir el usuario en el formulario 
      }
      this.productService.addProduct(this.newProduct);  //Indicamos a la función addProduct que incluya el nuevo producto
      console.log(this.productService.store);           
    }
  }


}
