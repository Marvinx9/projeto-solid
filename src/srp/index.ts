import { Message } from './services/message';
import { Order } from './entities/order';
import { Product } from './entities/product';
import { Save } from './services/saveOrder';
import { ShoppingCart } from './entities/shopping_cart';

const save = new Save();
const message = new Message();
const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart, message, save);

shoppingCart.addItem(new Product('Blusa', 49.9));
shoppingCart.addItem(new Product('Cinto', 29.9));
shoppingCart.addItem(new Product('Meia', 9.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
