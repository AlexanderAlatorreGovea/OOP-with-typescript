export class Message {
  title: string;
  message: string;
  //access modifier for private variable
  private _isSent: boolean;

  set isSent(value: boolean) {
    if (value === true) {
      this.deliveryDate = new Date();
    }
    this._isSent = value;
  }

  get isSent(): boolean {
    return this._isSent;
  }
  deliveryDate: Date;

  constructor(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isSent = false;
  }

  //get data
  get messageStatus(): string {
    const sentMessage = this.isSent ? "Has been sent" : "Has not been sent.";

    return `${this.message} | ${sentMessage}`;
  }

  //setter
  //update data while providing additional logic

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

console.log(message.isSent = false)
console.log(message.previewMessage());
console.log(message.messageStatus);
