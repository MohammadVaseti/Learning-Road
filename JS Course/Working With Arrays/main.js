// //simple array methods

// //    slice method
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 2));
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr.slice(2));
// console.log(arr);

// // splice method
// console.log(arr.splice(1, 3));
// console.log(arr.splice(-2));
// console.log(arr);
// console.log(arr.splice(3));
// console.log(arr.slice(-2));
// console.log(arr);

// //reverse method
// console.log(arr.reverse());

// //concat method
// const arr2 = [6, 7];
// console.log(arr.concat(arr2));
// console.log([...arr, ...arr2]);

// //  join method
// console.log(arr.join("#"));
// ///////////////////////////////////////////

// //new at method

// console.log(arr.at(2));
// console.log(arr.at(-2));
// console.log("hello".at(-1));

/////////////////

// looping array : forEach

// const arr = [1, 2, 3];
// arr.forEach(function (value, index, arr) {
//   console.log(value, index, arr);
// });

// // /////////////

// const movements = [200, -100, 300, -50];

// movements.forEach(function (mov, i) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// const arr2 = ["ali", "mohammad"];

// arr2.forEach(function (value, index, arr2) {
//   console.log(`your name is ${value} on number ${index + 1}`);
// });

// forEach with maps and sets

// maps
const map = new Map([
  ["usd", "united states"],
  ["eur", "euro"],
  ["gbp", "pound sterling"],
]);

map.forEach(function (value, index, map) {
  console.log(`${value} : ${index}`);
});

// sets
console.log("set");
const mySet = new Set(["eur", "eur", "usd"]);

mySet.forEach(function (value, _ , mySet) {
  console.log(`${(value, _)}`);
});
