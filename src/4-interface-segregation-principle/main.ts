import { ShoppingCart } from "./class/shopping-cart";
import { Order } from "./class/order";
import { Messaging } from "./services/messaging";
import { Persistency } from "./services/persistency";
import { Product } from "./class/product";
import { FiftyPercentDiscount } from "./class/discount";
import { IndividualCustomer } from "./class/customer";

const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();

const individualCustomer = new IndividualCustomer('amanda', 'almeida', '111-111-111-11')
const order = new Order(shoppingCart, messaging, persistency, individualCustomer);

shoppingCart.addItem(new Product("shirt", 9.99))
shoppingCart.addItem(new Product("pencil", 1.50))

shoppingCart.addItem({ name: "dress", price: 31.00 })

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDicount());
order.checkout();
console.log(order.orderStatus);
