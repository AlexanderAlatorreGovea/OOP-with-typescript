class Animal {
    age: number;
    legs: number;
    name: string;
    lives  = 1;
    constructor(age: number, legs: number, name: string) {
      this.age = age;
      this.legs = legs;
      this.name = name;
    }

    meow(): string {
        return "ROAR"
    }
  }
  
  //child class we need to call super in the constructor
  //super is to overwrite methods 
  //no reference to the properties just the methods
  export class Cat extends Animal {


    constructor(data: { age: number; legs: number; name: string }) {
      super(data.age, data.legs, data.name);
    }
  
    meow(): string {
     super.meow()
     super.lives;
      return `Hiss`;
    }
  }
  