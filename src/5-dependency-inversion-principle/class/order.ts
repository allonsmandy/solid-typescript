// a classe order de alto nivel depende de uma classe de baixo nivel, shoppingCart...
// o problema é o acoplamento entre essas duas classes, que nesse caso elas só andam juntas
// a classe Order só funciona corretamente se todas as essas classes tiverem instanciadas
import { OrderStatus } from "./interfaces/order-status";
import { CustomerOrder } from "./interfaces/customer-protocol";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { PersistencyProtocol } from "./interfaces/persistency-protocol";

export class Order {
  private _orderStatus: OrderStatus = "open";

  // vamos criar uma interface, colocar os metodos que a classe Order
  // precisa e vamos fazer tanto a classe de alto nivel e baixo nivel
  // depender da interface e nao de uma ou outra diretamente

  // vamos criar uma abstraçao para nao depender diretamente de uma classe concreta
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
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

    console.log('The customer is ', this.customer.getName)
  }
}
