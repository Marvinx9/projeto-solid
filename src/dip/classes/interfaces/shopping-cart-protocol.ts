import { CartItem } from './cart-items';

export interface ShoppingCartProtocol {
  addItem(item: CartItem): void;

  removeItem(index: number): void;

  items: Readonly<CartItem[]>;

  total(): number;

  totalWithDiscount(): number;

  isEmput(): boolean;

  clear(): void;
}
