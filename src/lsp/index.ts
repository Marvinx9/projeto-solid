/*
se ‘f(x)’ é uma propriedade demonstrável dos objetos ‘x’ do tipo ‘T’.
Então ‘f(y)’ deve ser verdadeiro para objetos ‘y’ de tipo ‘S’ onde ‘S’
é um substituto de ‘T’.(subtipos precisam sem substituíveis por seus tipos de base).

Se meu programa espera um animal, algo do tipo Cachorro (que herda de Animal)
deve servir como qualquer outro animal.
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
