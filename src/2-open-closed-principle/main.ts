/*
- não devemos ficar mexendo em nosso source code
  ex: ficar sempre mudando o valor do desconto quando ele mudar
- quanto mais classes separadas menos temos que sair fuçando em
todo codigo pra resolver o problema
- eu nao preciso alterar o codigo fonte do shopping-cart pra alterar
o desconto, nem em 'discount.ts'. Ao inves disso eu posso riar um novo desconto!
*/

import { ShoppingCart } from "./class/shopping-cart";
import { Order } from "./class/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Product } from "./class/product";
import { FiftyPercentDiscount } from "./class/discount";

// esse é o desconto que será utilizado no momento
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
