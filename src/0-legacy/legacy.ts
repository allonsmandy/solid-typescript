type CartItem = { name: string, price: number }
type OrderStatus = 'open' | 'closed'

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = []
  private _orderStatus: OrderStatus = 'open'

  addItem(item: CartItem): void {
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  get items(): Readonly<CartItem[]> {
    return this._items
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus
  }

  get total(): number {
    return +this._items.reduce((total, nextItem) => {
      return total + nextItem.price
    }, 0).toFixed(2)
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log("your shopping cart is empty!")
      return
    }

    this._orderStatus = 'closed'
    this.sendMessage(`your order totaling ${this.total} has been received!`)
    this.saveOrder()
    this.clear()
  }

  sendMessage(msg: string): void {
    console.log("message sent:", msg)
  }

  saveOrder(): void {
    console.log("order saved successfully...")
  }

  clear(): void {
    console.log("shopping cart was cleaned...")
    this._items.length = 0
  }

  isEmpty(): boolean {
    return this._items.length === 0
  }
}

const cart = new ShoppingCartLegacy()
cart.addItem({ name: "shirt", price: 9.99 })
cart.addItem({ name: "pencil", price: 1.50 })

console.log(cart.items)
console.log(cart.total)
console.log(cart.orderStatus)

cart.checkout()
