import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-modo',
  templateUrl: './btn-modo.component.html',
  styleUrls: ['./btn-modo.component.scss']
})


export class BtnModoComponent {

    modoCuadricula: boolean = true;

    constructor() {}

    ngOnInit(): void {}

    public cambiarModo() {
      if(this.modoCuadricula) {
        this.modoCuadricula=false;
      }else{
        this.modoCuadricula = true;
      };
    }

}
