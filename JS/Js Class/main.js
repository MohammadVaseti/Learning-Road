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

  sayHi() {
    return "hello" + " " + this.name;
  }
}
const obj = new User2("ali", 28);
console.log(obj.name, obj.age);
console.log(obj.sayHi());

class Student {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
  }

  showinfo() {
    return `${this.name} get ${this.mark}`;
  }
}

const st = new Student("reza", 20);
console.log(st.showinfo());

class Person {
  constructor(firsname, lastname, age) {
    this.fn = firsname;
    this.ln = lastname;
    this.age = age;
  }
  static id() {
    return 1;
  }

  show() {
    return `you are ${this.fn} ${this.ln} ${this.age} years old`;
  }
}

let ob = new Person("bahram", "rezaei", 22);
console.log(ob.show());
console.log(Person.id());

class User3 extends Person {
  constructor(fn, ln, age, job) {
    super(fn, ln, age);
    this.job = job;
  }
  sh() {
    return `${this.fn} ${this.ln} , ${this.job}`;
  }
}
let o = new User3("hamid", "alavi", 32, "teacher");
console.log(o.sh());
