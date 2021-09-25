/*
    *    1. Crate a User Class
    *    2. Add first name, lastName, and email property
    *    3. Add a get to return a fullName
    *    4. Add a method to check if your email parent matches the user's current email.
*/

class User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  doesNotMatch(email: string): boolean {
    return this.email === email;
  }
}
