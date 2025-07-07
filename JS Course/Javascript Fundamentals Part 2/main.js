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
