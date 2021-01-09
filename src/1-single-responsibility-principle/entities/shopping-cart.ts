/*
- cada uma das minhas classes tem apenas uma responsabilidade unica!
- você pode medir a coesao de uma classe quando ela utiliza seus
atributos dentro dos seus metodos

Com base no código legado foi necessário fazer os seguintes questionamentos:
- Um carrinho de compras tem que ter itens? Sim!
- Um carrinho de compras tem que ter um status do pedido? Nao!
- Um carrinho de compras tem que ter um metodo pra adicionar e remover itens? Sim!
- Um carrinho de compras tem que ter um total? Sim!
- Um carrinho de compras precisa ter o checkout dentro dele? Nao! Isso nao é responsabilidade do carrinho de compras!
- Um carrinho de compras tem que ter "enviar mensagem" e "salvar pedido"? Nao! é uma das responsabilidades...
- Um carrinho de compras tem que ser a opção de limpar? Sim! pra limpar carrinho é interessante sim =)
*/
import { CartItem } from './interfaces/cart-item'

export class ShoppingCart {
  private readonly _items: CartItem[] = []

  addItem(item: CartItem): void {
    this._items.push(item)
  }

  removeItem(index: number): void {
    this._items.splice(index, 1)
  }

  get items(): Readonly<CartItem[]> {
    return this._items
  }

  get total(): number {
    return +this._items.reduce((total, next) => {
      return total + next.price
    }, 0).toFixed(2)
  }

  clear(): void {
    console.log("shopping cart was cleaned...")
    this._items.length = 0
  }

  // validação! caso a parte...
  isEmpty(): boolean {
    return this._items.length === 0
  }
}
