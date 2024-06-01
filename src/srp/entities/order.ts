import { OrderStatus } from './interfaces/order-status';
import { Message } from '../services/message';
import { Save } from '../services/saveOrder';
import { ShoppingCart } from './shopping_cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';
  constructor(
    private readonly cart: ShoppingCart,
    private readonly message: Message,
    private readonly save: Save,
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
      `Seu carrinho com total de ${this.cart.total()} foi recebido`,
    );
    this.save.saveOrder();
    this.cart.clear();
  }
}
