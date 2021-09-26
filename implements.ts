class Animal {
  age: number;
  legs: number;
  name: string;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }
}

//Matching the shape of the class with implements
//implements is to match the same shape
//not a child of Animal
export class Dog implements Animal {
  age: number;
  legs: number;
  name: string;

  woof(): string {
    return "Woof";
  }
}

//child class we need to call super in the constructor
export class Cat extends Animal {
  constructor(data: { age: number; legs: number; name: string }) {
    super(data.age, data.legs, data.name);
  }

  meow(): string {
    return `Hiss`;
  }
}
