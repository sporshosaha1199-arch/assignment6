export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  period: string;
  tag: string;
  tagType: 'popular' | 'new' | 'best-seller';
  features: string[];
  icon: string;
}

export interface CartItem extends Product {
  cartId: string;
}
