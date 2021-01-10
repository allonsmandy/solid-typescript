### Principio da substituição de Liskov

**"Se q(x) é uma propriedade demonstrável dos objetos x de tipo T. Então q(y) deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T."**

De forma bem simples: subtipos precisam ser substituiveis por seus tipos de base!
De forma bem mais simples: se meu programa espera um Animal, algo do tipo Cachorro (que herda de Animal) deve servir como qualquer outro Animal

"Classes derivadas devem poder ser substitutas de suas classes base"

```
├── 3-liskov-substitution-principle
│   ├── class
│   │   ├── interfaces
│   ├── services
```
