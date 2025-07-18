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

// challenge #2
const data = [125, 500, 400];

let tip = 0;
data.map((el) => {
  el > 30 && el < 500 ? (tip = 0.15 * el) : (tip = 0.2 * el);
  return console.log(tip + el);
});
