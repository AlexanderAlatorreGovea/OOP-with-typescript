//utility function that are not extatiated
//cannot reference the this keyword unless the property or method is static
class Message {
  title: string;
  message: string;
  isSent: boolean;
}

class Messages extends Array<Message> {
  public getValidMessage(message: Messages[]): Messages[] {
    return Messages.filter(value => value.trim().length > 0);
  }

  static getValidMessage(message: Message[]): Message[] {
    return Messages.filter(value => value.trim().length > 0);
  }
}

Messages.getValidMessage([]);
