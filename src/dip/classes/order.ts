import { OrderStatus } from './interfaces/order-status';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessageProtocol } from './interfaces/message-protocol';
import { SaveProtocol } from './interfaces/save-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly message: MessageProtocol,
    private readonly save: SaveProtocol,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  //
  checkout(): void {
    if (this.cart.isEmput()) {
      console.log('Seu carrinho está vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu carrinho com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.save.saveOrder();
    this.cart.clear();
  }
}
