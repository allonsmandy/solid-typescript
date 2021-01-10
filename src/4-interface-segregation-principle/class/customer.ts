import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
} from "./interfaces/customer-protocol";

// estariamos forçando a criar uma coisa que nao preciariamos, que no
// caso seria cnpj caso dessemos implements CustomerProtocol
export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrder {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName
  }

  getIdn(): string {
    return this.cpf
  }
}

// nao temos alguns dos atributos de identificação de um IndividualCustomer
// em um EnterpriseCustomer, que no caso seria uma pessoa juridica
export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustomerOrder {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name
  }

  getIdn(): string {
    return this.cnpj
  }
}
