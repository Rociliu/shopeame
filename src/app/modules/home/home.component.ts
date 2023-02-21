import { Component } from '@angular/core';

/* Importamos la interfaz de datos */
import { FeaturedProductSection } from '../../interfaces/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
  public lastProducts: FeaturedProductSection = {
    section: 'Last Products',
    products: [
      {
        title: 'Máscara de Mono',
        price: 50.95,
        image: 'assets/images/Latest/01-mascara-mono.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        title: 'Máscara de Unicornio',
        price: 50.95,
        image: 'assets/images/Latest/02-mascara-unicornio.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        title: 'Máscara de Cocodrilo',
        price: 50.95,
        image: 'assets/images/Latest/03-mascara-cocodrilo.webp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        title: 'Máscara de Pez Verde',
        price: 50.95,
        image: 'assets/images/Latest/04-mascara-monstruo-pez.webp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        title: 'Máscara de Tiburón',
        price: 50.95,
        image: 'assets/images/Latest/05-mascara-tiburon.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        title: 'Máscara de Tigre',
        price: 50.95,
        image: 'assets/images/Latest/06-mascara-tigre.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      }
    ]
  };

  public alfombrasProducts: FeaturedProductSection = {
    section: 'Alfombras Trambólicas',
    products: [
      {
        title: 'Alfombra Trambólica 1',
        price: 50.95,
        image: 'assets/images/Alfombras/01-alfombra-trambolica.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        title: 'Alfombra Trambólica 2',
        price: 50.95,
        image: 'assets/images/Alfombras/02-alfombra-trambolica.webp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        title: 'Alfombra Trambólica 3',
        price: 50.95,
        image: 'assets/images/Alfombras/03-alfombra-trambolica.webp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        title: 'Alfombra Trambólica 4',
        price: 50.95,
        image: 'assets/images/Alfombras/04-alfombra-trambolica.webp',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        title: 'Alfombra Trambólica 5',
        price: 50.95,
        image: 'assets/images/Alfombras/05-alfombra-trambolica.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      },
      {
        title: 'Alfombra Trambólica 6',
        price: 50.95,
        image: 'assets/images/Alfombras/06-alfombra-trambolica.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
      }
    ]
  };
}
