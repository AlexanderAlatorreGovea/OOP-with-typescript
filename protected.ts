class Animal {
  protected age: number;
  private legs: number;
  name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
  public get ourLegs() {
    return this.legs;
  }
}

class Dog implements Animal {
    age: number;
    legs: number;
    name: string;
}

