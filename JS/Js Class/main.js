"use strict";

class Car {
  constructor(name) {
    console.log((this.brand = name));
  }
}

const newCar = new Car("ford");
