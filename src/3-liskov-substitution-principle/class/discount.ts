export abstract class Discount {
  protected discount = 0;

  calculate(price: number): unknown {
    return price - price * (this.discount * 100);
    // o metodo calculate deve existir só que na base class eu lanço exceçao
    // o dev teria que criar esse metodo na subclasse (isso quebra este principio pq agr eu preciso q toda familia de discount implemente isso)
    // throw new Error("not implemented error!")
  }
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

// aqui nao é pra aplicar nenhum desconto, veja que to mudando o comportamento
// de uma base class. O NoDiscount ta aplicando um comportamento que
// nao é o da base class!
export class NoDiscount extends Discount {
  calculate(price: number): unknown {
    return price;
  }
}
