import { CartItem } from "./cart-item"

export interface ShoppingCartProtocol {
  items(): Readonly<CartItem[]>
  addItem(item: CartItem): void
  removeItem(index: number): void
  clear(): void
  isEmpty(): boolean
  total(): number
  totalWithDicount(): number
}
