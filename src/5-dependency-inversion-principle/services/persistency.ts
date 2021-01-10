import { PersistencyProtocol } from "../class/interfaces/persistency-protocol";

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log("order saved successfully...")
  }
}
