"use strict";

class Car {
  constructor(name) {
    console.log((this.brand = name));
  }
}

const newCar = new Car("ford");

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const user1 = new User("mohammad", 27);
console.log(user1.name, user1.age);

class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const obj = new User2("ali", 28);
console.log(obj.name, obj.age);
