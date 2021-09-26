/*
    *    1. Crate a User Class
    *    2. Add first name, lastName, and email property
    *    3. Add a get to return a fullName
    *    4. Add a method to check if your email parent matches the user's current email.
    *
    *   
    *
*/
(() => {
  class User {
    public readonly id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    protected dob: Date;

    constructor(firstName: string, lastName: string, email: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
    }

    public get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    public doesNotMatch(email: string): boolean {
      return this.email === email;
    }
  }

  class Admin extends User {
    public readonly yearBorn: number;
    constructor(firstName: string, lastName: string, email: string) {
      super();
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.yearBorn = this.getYear();
    }

    private getYear(): number {
      return this.dob.getFullYear();
    }
  }

  // class Guest implements User {
  //   firstName: string;
  //   lastName: string;
  //   email: string;

  //   constructor(firstName: string, lastName: string, email: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     this.email = email;
  //   }

  //   get fullName(): string {
  //     return `${this.firstName}, ${this.lastName}`;
  //   }

  //   doesNotMatch(email: string): boolean {
  //     return this.email === email;
  //   }
  // }
})();
