/*
Importante: É melhor voce criar um codigo do jeito que sabe e depois aplicar os principios.

- a classe Order precisa de um carrinho de compras, dai ela vai poder
pegar os dados do carrinho, como o total, itens, etc...
- essa classe é responsavel por fazer o checkout, finalizar o pedido

clean code: "uma classe pode ser considerada coesa quando
ela utiliza seus atributos dentro dos seus métodos"
*/

import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCart } from "./shopping-cart";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";

export class Order {
  private _orderStatus: OrderStatus = "open";

  // quebramos um outro principio aqui, injeçao de dependencias pra poder delegar os serviços
  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
  ) { }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("your shopping cart is empty!");
      return;
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage("your order has been received!");
    this.persistency.saveOrder();
    this.cart.clear();
  }
}
