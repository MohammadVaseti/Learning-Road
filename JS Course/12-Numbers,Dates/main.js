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
