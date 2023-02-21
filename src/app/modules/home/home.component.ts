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
        price: 15.95,
        image: 'assets/images/Latest/01-mascara-mono.jpg',
        description: 'Esta máscara tiene un diseño de cara de mono con detalles realistas, como orejas, nariz y pelo en la cabeza.'
      },
      {
        title: 'Máscara de Unicornio',
        price: 18.95,
        image: 'assets/images/Latest/02-mascara-unicornio.jpg',
        description: 'Esta máscara presenta un diseño de cara de unicornio con cuerno, orejas y detalles de colores brillantes en la cabeza.'
      },
      {
        title: 'Máscara de Cocodrilo',
        price: 20.95,
        image: 'assets/images/Latest/03-mascara-cocodrilo.webp',
        description: 'Esta máscara tiene un diseño de cara de cocodrilo con detalles realistas, como ojos, dientes y texturas de piel.'
      },
      {
        title: 'Máscara de Pez Verde',
        price: 17.95,
        image: 'assets/images/Latest/04-mascara-monstruo-pez.webp',
        description: 'Esta máscara presenta un diseño de cara de pez con detalles realistas, como aletas, escamas y ojos.'
      },
      {
        title: 'Máscara de Tiburón',
        price: 19.95,
        image: 'assets/images/Latest/05-mascara-tiburon.jpg',
        description: 'Esta máscara presenta un diseño de cara de tigre con detalles realistas, como orejas, bigotes y rayas.'
      },
      {
        title: 'Máscara de Tigre',
        price: 16.95,
        image: 'assets/images/Latest/06-mascara-tigre.jpg',
        description: 'Esta máscara presenta un diseño de cara de tigre con detalles realistas, como orejas, bigotes y rayas.'
      }
    ]
  };

  public alfombrasProducts: FeaturedProductSection = {
    section: 'Alfombras Trambólicas',
    products: [
      {
        title: 'Alfombra Trambólica 1',
        price: 120.95,
        image: 'assets/images/Alfombras/01-alfombra-trambolica.jpg',
        description: 'Esta alfombra tiene un diseño único de estilo bohemio con una mezcla de colores vibrantes y patrones tribales.'
      },
      {
        title: 'Alfombra Trambólica 2',
        price: 90.95,
        image: 'assets/images/Alfombras/02-alfombra-trambolica.webp',
        description: 'Esta alfombra presenta un diseño de rayas anchas en tonos neutros, lo que la convierte en una opción versátil para cualquier decoración del hogar.'
      },
      {
        title: 'Alfombra Trambólica 3',
        price: 200.95,
        image: 'assets/images/Alfombras/03-alfombra-trambolica.webp',
        description: 'Esta alfombra tiene un diseño clásico de persa con un patrón de flores y bordes detallados.'
      },
      {
        title: 'Alfombra Trambólica 4',
        price: 150.95,
        image: 'assets/images/Alfombras/04-alfombra-trambolica.webp',
        description: 'Esta alfombra presenta un diseño geométrico en tonos pastel suaves, lo que la hace perfecta para habitaciones con una decoración delicada.'
      },
      {
        title: 'Alfombra Trambólica 5',
        price: 180.95,
        image: 'assets/images/Alfombras/05-alfombra-trambolica.jpg',
        description: 'Esta alfombra tiene un diseño degradado de tonos de azul y verde, lo que la convierte en una opción ideal para una decoración de estilo costero o tropical.'
      },
      {
        title: 'Alfombra Trambólica 6',
        price: 250.95,
        image: 'assets/images/Alfombras/06-alfombra-trambolica.jpg',
        description: 'Esta alfombra presenta un diseño abstracto y colorido que puede funcionar como pieza central de cualquier habitación.'
      }
    ]
  };
}
