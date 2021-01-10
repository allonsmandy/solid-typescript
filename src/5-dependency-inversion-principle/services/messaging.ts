import { MessagingProtocol } from "../class/interfaces/messaging-protocol";

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log("message sent: ", msg)
  }
}
