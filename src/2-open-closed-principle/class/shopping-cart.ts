import { CartItem } from "./interfaces/cart-item";
import { Discount } from "./discount";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: Discount) { }

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get total(): number {
    return +this._items
      .reduce((total, next) => {
        return total + next.price;
      }, 0)
      .toFixed(2);
  }

  /* precisamos ver uma maneira de adicionar/alterar o
    desconto sem modificar o codigo! extendendo ela... */
  totalWithDicount(): number {
    return this.discount.calculate(this.total);
  }

  clear(): void {
    console.log("shopping cart was cleaned...");
    this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
