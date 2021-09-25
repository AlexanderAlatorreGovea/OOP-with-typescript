export class Message {
  title: string;
  message: string;
  isSent: boolean;

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }

  //return a string
  //void is the type when you are not returning anything
  //in this case we are returning a string so we type check it with string
  previewMessage(): string {
    return this.message.slice(0, 25).concat("...");
  }
}

const message = new Message(
  "New Course!!! Just $9.99",
  "Checkout out our latest course in OOP with Ts"
);

console.log(message.previewMessage())
