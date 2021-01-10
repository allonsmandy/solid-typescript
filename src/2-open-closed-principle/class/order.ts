import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCart } from "./shopping-cart";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";

export class Order {
  private _orderStatus: OrderStatus = "open";

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
