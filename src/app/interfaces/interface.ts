/* Declaramos la Interfaz de datos */
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stars: number;
    image: string;
}

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
