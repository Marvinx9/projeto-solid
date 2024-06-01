type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem) {
    this._items.push(item);
  }

  removeItem(index: number) {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items.reduce((acumulator, current) => acumulator + current.price, 0).toFixed(2);
  }

  checkout(): void {
    if(this.isEmput()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(`Seu carrinho com total de ${this.total()} foi recebido`);
    this.saveOrder();
    this.clear();
  }

  isEmput(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Mensagem enviada!', msg);
  }

  saveOrder(): void {
    console.log('pedido salvo com sucesso...');
  }

  clear(): void {
console.log('Carrinho de compras foi limpo');

    this._items.length = 0
  }
}

const shoppingCart = new ShoppingCart();
shoppingCart.addItem({ name: 'Blusa', price: 49.9 });
shoppingCart.addItem({ name: 'Cinto', price: 29.9 });
shoppingCart.addItem({ name: 'Meia', price: 9.9 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
