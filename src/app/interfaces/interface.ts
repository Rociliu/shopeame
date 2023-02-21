/* Declaramos la Interfaz de datos */
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stars: number;
    image: string;
}

/* Declaramos la Interfaz de Featured-Products */
export interface FeaturedProduct {
  title: string;
  image: string;
  price: number;
  description: string;
}

export interface FeaturedProductSection {
  section: string;
  products: FeaturedProduct[];
}

/* Declaramos la interfaz para el formulario */
export interface ProductForm {
  name: string;
  price: number;
  description: string;
  stars: number;
  image: string;
  id: number;
}


