import { Discount } from './discount';
import { CartItem } from './interfaces/cart-items';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';

//single responsibility principle

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) {}

  addItem(item: CartItem) {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((acumulator, current) => acumulator + current.price, 0)
      .toFixed(2);
  }

  totalWithDiscount(): number {
    return this.discount.calculate(this.total());
  }

  isEmput(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');

    this._items.length = 0;
  }
}
