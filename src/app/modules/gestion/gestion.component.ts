import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductForm } from '../../interfaces/interface';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {

  /* Declaramos formulario */
  productFormRegister: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.productFormRegister = this.FormBuilder.group( {
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      price:['', [Validators.required]], 
      description:['',[Validators.required, Validators.maxLength(200)]],
      stars:['',[Validators.required]],
      image:['',[Validators.required]]
    })
  }

  /* Creamos la función onSubmit y la variable submitted que será utilizada en la función */
  submitted: boolean = false;

  onSubmit(): void {
    this.submitted = true;
    if (this.productFormRegister.valid) {
      const newProduct: ProductForm = {
        name: this.productFormRegister.get('name')?.value,
        price: this.productFormRegister.get('price')?.value,
        description: this.productFormRegister.get('description')?.value,
        stars: this.productFormRegister.get('stars')?.value,
        image: this.productFormRegister.get('image')?.value,
        id: this.productFormRegister.get('id')?.value,
      }
      console.log('nuevo producto', newProduct);
    }
  }
}
