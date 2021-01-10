### Principio da inversão de dependencia

Os modulos de alto nivel nao devem depender de modulos de baixo nivel. Ambos devem depender
de abstrações.
Dependa de abstrações, nao de implementaçoes
Abstraçoes nao deve depender de detalhes. Detalhes devem depender de abstraçoes

Classes de baixo nivel sao classes que executam tarefas (os detalhes)
Classes de alto nivel sao classes que gerenciam as classes de baixo nivel

```
├── 5-depencendy-inversion-principle
│   ├── class
│   │   ├── interfaces
│   ├── services
```
