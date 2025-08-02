"use strict";

// Converting and Checking Numbers
// console.log(Number("23"));
// console.log(+"25");
// console.log(Number("jonas"));
// console.log(typeof NaN);
// console.log(Number.isNaN(20));
// console.log(Number.isNaN("23"));
// console.log(Number.isNaN(+"23x"));
// console.log(Number.isFinite(23 / 0));
// console.log(Number.isFinite(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23.8));

// Math and Rounding

console.log(Math.sqrt(4));
console.log(8 ** (1 / 2));
console.log(9 ** (1 / 2));
console.log(8 ** (1 / 3));
console.log(Math.min(2, 7, 56));
console.log(Math.max(2, 7, 56));

const ranInt = (min, max) => Math.trunc(Math.random() * (max - min)) + min;
console.log(ranInt(5, 25));

console.log(Math.trunc(23.3));
console.log(Math.floor(23.3));
console.log(Math.ceil(23.3));
console.log(Math.round(20.3));
console.log(Math.round(20.9));

console.log(Math.trunc(-25.2));
console.log(Math.floor(-25.2));

let num = 3.141516;
console.log(+num.toFixed(2));

// Remainder operator
console.log(5 % 2);
const isEven = (num) =>
  num % 2 === 0 ? console.log("even") : console.log("odd");
isEven(5);
isEven(8);
isEven(0);

// numeric Seprator

const diameter = 100_000_000;
console.log(diameter);
const diameter2 = "100_000_000";
console.log(diameter2);
const diameter3 = Number("100_000_000");
console.log(diameter3);

// working with BigInt

console.log(122222333344444555566667778888999n);
console.log(BigInt(12121211133334442200000099988000));
console.log(12n / 4n);
console.log(13n / 4n);
// console.log(12n > 23);!!!!!!!!!!!!!!!! false

// console.log(2n + 4); error

console.log(4n * 4n);

// or you can use BigInt() to create
console.log(BigInt(23));

// creatin date
const now = new Date();

console.log(now);
console.log(now.getFullYear());
// FullYear Recomended
console.log(now.getMonth());
console.log(Date.now());
console.log(new Date());

// console.log(new Date(33344445555600));

// operations with dates

const future = new Date(2025, 12, 29);
const newNow = new Date(2025, 8, 2);
console.log(newNow);
console.log(future - now);
const calcDayPassed = (day2, day1) =>
  Math.round(Math.abs(+day2 - +day1) / (1000 * 60 * 60 * 24));
console.log(calcDayPassed(future, newNow));
