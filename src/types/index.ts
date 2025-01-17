export type Grade = 'HG' | 'RG' | 'MG' | 'PG';
export type Category = 'Model Kits' | 'Tools' | 'Paint' | 'Accessories';

export interface Product {
  id: string;
  name: string;
  grade?: Grade;
  scale?: string;
  price: number;
  image: string;
  category: Category;
  description: string;
  inStock: boolean;
}

export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}