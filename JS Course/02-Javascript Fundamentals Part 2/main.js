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
const calcTip = function (bill) {
  let tip = 0;
  bill > 30 && bill < 500 ? (tip = 0.15 * bill) : (tip = 0.2 * bill);
  const tips = [];
  const total = tip + bill;
  return total;
};
console.log(calcTip(500));
