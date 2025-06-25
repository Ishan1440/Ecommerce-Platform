export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
  relatedProducts?: number[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  preferences: string[];
}

export interface Recommendation {
  type: 'trending' | 'personalized' | 'category' | 'similar';
  products: Product[];
  title: string;
} 