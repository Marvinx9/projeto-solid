import { CartItem } from './interfaces/cart-items';

//single responsibility principle

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
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

  isEmput(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo');

    this._items.length = 0;
  }
}
