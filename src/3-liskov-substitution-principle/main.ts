/*
- se eu vejo um mamifero qual o comportamento esperado dele? É que ele mame!
se o mamifero nao mama, ele nao deveria ser um mamifero!

Esse principio pede para que vpcẽ tenha coerencia quando for utilizar essa relação

ex: toda vez que for usar Discount, o comportamento esperado dos subtipos
de Discount deve ser o mesmo de Discount
*/

import { ShoppingCart } from "./class/shopping-cart";
import { Order } from "./class/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Product } from "./class/product";
import { FiftyPercentDiscount } from "./class/discount";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("shirt", 9.99))
shoppingCart.addItem(new Product("pencil", 1.50))

shoppingCart.addItem({ name: "dress", price: 31.00 })

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDicount());
order.checkout();
console.log(order.orderStatus);
