/*
O arquivo main.ts é geralmente a parte mais "suja" do programa,
é onde você instancia a classe, injeta dependencias, etc...
*/

import { ShoppingCart } from "./entities/shopping-cart"
import { Messaging } from "./services/messaging"
import { Persistency } from "./services/persistency"
import { Order } from "./entities/order"
import { Product } from "./entities/product"

const shoppingCart = new ShoppingCart()
const messaging = new Messaging()
const persistency = new Persistency()

// injeção de dependencias
const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product("shirt", 9.99))
shoppingCart.addItem(new Product("pencil", 1.50))

shoppingCart.addItem({ name: "dress", price: 31.00 })

console.log(shoppingCart.items)
console.log(shoppingCart.total)

order.checkout()
console.log(order.orderStatus)
