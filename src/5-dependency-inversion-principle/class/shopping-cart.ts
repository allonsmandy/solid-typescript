import { CartItem } from "./interfaces/cart-item";
import { Discount } from "./discount";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocol";

export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) { }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => {
        return total + next.price;
      }, 0)
      .toFixed(2);
  }

  totalWithDicount(): number {
    const result = this.discount.calculate(this.total());
    if (typeof result === "number") return result;
    return this.total();
  }

  clear(): void {
    console.log("shopping cart was cleaned...");
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
