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

export class Dog extends Animal {
  woof(): string {
    return "Woof";
  }
}

const dog = new Dog(2, 4, "Gator");
dog.name;

export class Cat extends Animal {
  meow(): string {
    return `Hiss`;
  }
}

const cat = new Cat(13, 4, "baby");
cat.age;
cat.meow();
