// Activating Strict Mode
"use strict";

// functions / declaration vs expression / arrow

// delaration
function hello() {
  return "hello";
}
console.log(hello());

// expression
const hello2 = function () {
  return "hello2";
};
console.log(hello2());

// arrow

const hello3 = () => "hello3";
console.log(hello3());

// challenge# 1
// Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
//  1, 2.
const formula = (a, b, c) => (a + b + c) / 3;
// const KoalaAve = formula(65, 54, 49);
const KoalaAve = formula(23, 34, 27);
console.log(KoalaAve);
// const DolphinsAve = formula(44, 23, 71);
const DolphinsAve = formula(85, 54, 41);
console.log(DolphinsAve);

const winner = function (a, b) {
  if (DolphinsAve > KoalaAve) {
    console.log(`dolphins winner ${DolphinsAve} vs ${KoalaAve}`);
  } else if (DolphinsAve < KoalaAve) {
    console.log(`koalas winner ${DolphinsAve} vs ${KoalaAve}`);
  } else {
    console.log(`game was Equal ${(DolphinsAve, KoalaAve)}`);
  }
};
winner(DolphinsAve, KoalaAve);

// ////////////////////

// challenge #2
const data = [125, 500, 400];

let tip = 0;
data.map((el) => {
  el > 30 && el < 500 ? (tip = 0.15 * el) : (tip = 0.2 * el);
  return console.log(tip + el);
});
// introduction to objectes

// object literal
const myInfo = {
  name: "mohammad",
  age: 27,
};

const myInfo2 = new Object();
myInfo2.job = "frontend developer";
myInfo2.hobby = "reading book";

console.log(myInfo);
console.log("////");
console.log(myInfo2);

// Dot vs. Bracket Notation
console.log(myInfo.name);
console.log(myInfo["name"]);

myInfo.loc = "iran";
myInfo2["loc"] = "tehran";
myInfo["timeZone"] = 22;
console.log(myInfo);
console.log("////");
console.log(myInfo2);

const add = "Zone";
console.log(myInfo["time" + add]);

// # challenge 3

const markObj = {
  fullName: "mark miller",
  mass: 78,
  height: 1.69,
};

const johnObj = {
  fullName: " john smith",
  mass: 92,
  height: 1.95,
};
markObj.calcBmi = markObj.mass / markObj.height ** 2;
johnObj.calcBmi = johnObj.mass / johnObj.height ** 2;

console.log(markObj, johnObj);

if (johnObj.calcBmi > markObj.calcBmi) {
  console.log(`${johnObj.fullName} greater ${johnObj.calcBmi}`);
} else {
  console.log(`${markObj.fullName} greater ${markObj.calcBmi}`);
}
// object method
const newObj = {
  name: "ali",
  func: function () {
    return `${this.name} is my name`;
  },
};
console.log(newObj["func"]());
