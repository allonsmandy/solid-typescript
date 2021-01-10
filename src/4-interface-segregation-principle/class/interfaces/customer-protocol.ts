// eles tem metodos em comumm
export interface CustomerOrder {
  getName(): string;
  getIdn(): string;
}

// faz muita coisa e força a ter coisas que eu nao precisaria!
export interface CustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
