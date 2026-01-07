
export type Category = 'iphone' | 'xiaomi' | 'demais';

export interface Product {
  id: string;
  name: string;
  category: Category;
  basePrice: number;
  finalPrice: number;
  colors: string[];
  specs: string[];
  description: string;
  images: {
    front: string;
    side: string;
    back: string;
  };
  stockStatus: 'In Stock' | 'Last Units' | 'Out of Stock';
  availableQuantity: number;
}
