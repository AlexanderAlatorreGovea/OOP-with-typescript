class User<T> {
  firstName: string;
  lastName: string;
  email: string;
  isMale: boolean;
  public classicUserData: T;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  public mergeClassicUser(params: T): void {
    const { name, isMale, age, email } = this;

    this.classicUserData = { name, isMale, age, email, ...params };
  }
}

interface ClassicUser {
  name: { first: string; last: string };
}

interface ClassicUser2 {
  name: { first: string; last: string };
}

const user1 = new User<ClassicUser>();
user1.mergeClassicUser({
  name: { first: "Alex", last: "Govea" },
});
user1.mergeClassicUser.name.first;

const user2 = new User<ClassicUser2>();
user2.mergeClassicUser({
  name: { first: "Alex", last: "Govea", middle: "Alatorre" },
});
