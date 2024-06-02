/*
Módulos de alto nível não podem depender de módulos de baixo nível.
Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrções não podem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/
import { Message } from './services/message';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { Save } from './services/saveOrder';
import { ShoppingCart } from './classes/shopping_cart';
import { /*FiftyPercentDisc, */ TenPercentDisc } from './classes/discount';

const save = new Save();
const tenPercentDisc = new TenPercentDisc();
const message = new Message();
const shoppingCart = new ShoppingCart(tenPercentDisc);
const order = new Order(shoppingCart, message, save);

shoppingCart.addItem(new Product('Blusa', 49.9));
shoppingCart.addItem(new Product('Cinto', 29.9));
shoppingCart.addItem(new Product('Meia', 9.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
