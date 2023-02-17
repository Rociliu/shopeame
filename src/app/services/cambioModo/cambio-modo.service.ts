import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})


export class CambioModoService {

 /* modoCuadricula: boolean = true; */

    constructor() {}

    ngOnInit(): void {}

    cambiarModo() {
      alert("click")
     /*  if(this.modoCuadricula) {
        this.modoCuadricula=false;
      }else{
        this.modoCuadricula = true;
      }; */
    }
}
