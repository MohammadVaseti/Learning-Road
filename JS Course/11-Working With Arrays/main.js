// // //simple array methods

// // //    slice method
// // const arr = [1, 2, 3, 4, 5];
// // console.log(arr.slice(0, 2));
// // console.log(arr.slice(-1));
// // console.log(arr.slice(-2));
// // console.log(arr.slice(2));
// // console.log(arr);

// // // splice method
// // console.log(arr.splice(1, 3));
// // console.log(arr.splice(-2));
// // console.log(arr);
// // console.log(arr.splice(3));
// // console.log(arr.slice(-2));
// // console.log(arr);

// // //reverse method
// // console.log(arr.reverse());

// // //concat method
// // const arr2 = [6, 7];
// // console.log(arr.concat(arr2));
// // console.log([...arr, ...arr2]);

// // //  join method
// // console.log(arr.join("#"));
// // ///////////////////////////////////////////

// // //new at method

// // console.log(arr.at(2));
// // console.log(arr.at(-2));
// // console.log("hello".at(-1));

// /////////////////

// // looping array : forEach

// // looping Arrays forEach
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // movements.forEach(function(cv,i,arr){
// //   console.log(cv);
// // })

// // const arr = [1, 2, 3];
// // arr.forEach(function (value, index, arr) {
// //   console.log(value, index, arr);
// // });

// // // /////////////

// // const movements = [200, -100, 300, -50];

// // movements.forEach(function (mov, i) {
// //   if (mov > 0) {
// //     console.log(`Movement ${i + 1}: You deposited ${mov}`);
// //   } else {
// //     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// //   }
// // });

// // const arr2 = ["ali", "mohammad"];

// // arr2.forEach(function (value, index, arr2) {
// //   console.log(`your name is ${value} on number ${index + 1}`);
// // });

// // forEach with maps and sets

// // maps
// const map = new Map([
//   ["usd", "united states"],
//   ["eur", "euro"],
//   ["gbp", "pound sterling"],
// ]);

// map.forEach(function (value, index, map) {
//   console.log(`${value} : ${index}`);
// });

// // sets
// console.log("set");
// const mySet = new Set(["eur", "eur", "usd"]);

// mySet.forEach(function (value, _, mySet) {
//   console.log(`${(value, _)}`);
// });

// //* creating DOM Elements

// // usage of insertAdjacentHTML
// let h1 = document.querySelector("h1");
// const html = `hello this is for test ${2 + 2}`;
// h1.insertAdjacentHTML("afterbegin", html);

// // diffrence between innerHTML & textContent
// h1.innerHTML = `<a herf='#'>link</a> with codes`;
// h1.textContent += `<a herf='#'>link</a> without codes`;
// // *Challeng#1
// const julia1 = [3, 5, 2, 12, 17];
// const julia1c = [...julia1];
// // delete index 5,2,12
// // an array with corrected julia and kate

// const kate1 = [4, 1, 15, 8, 3];

// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (arr1, arr2) {
//   const newArr1 = arr1.splice(1, 2);

//   const bothArr = [...newArr1, ...arr2];

//   bothArr.forEach(function (v, i, bothArr) {
//     if (v >= 3) {
//       console.log(`the dog number ${i + 1} age = ${v} is adult`);
//     } else {
//       console.log(`the dog number ${i + 1} age = ${v} is pupy`);
//     }
//   });
// };

// checkDogs(julia1, kate1);
// console.log("////data2");
// checkDogs(julia2, kate2);

// //* */ data tranformations map,filter,reduce

// // map
// const movements = [200, -100, 300, 150];

// const eurToUsd = 2;
// const movementsUSD = movements.map(function (el, i, movements) {
//   console.log(el * eurToUsd);
// });

// // filter
// movements.filter(function (e, i, movements) {
//   if (e > 100) {
//     console.log(e, i);
//   }
// });

// // reduce
// const result = movements.reduce(function (acc, el, i, movements) {
//   return acc + el;
// }, 0);
// console.log(result);
// ////////////////////////////////////////
// // *the map method
// const money = [100, 200, 300];
// money.map(function (val, ind, money) {
//   console.log("//////", val * 2);
// });

// // with for of

// for (const m of money) {
//   console.log(m * 3);
// }
// // with arrow function
// const withArrow = money.map((el, i, arr) => el * 3);
// console.log(withArrow);

// // *computing username

// // *the filter method

// // the challenge fo last of video  => show widthrawals

// const movements2 = [200, -100, 300, -50, -255];

// const widthrawals = movements2.filter(function (v, i) {
//   return v < 0;
// });
// console.log(widthrawals);

// // the reduce method

// const singles = [10, 333, 20, -5];

// const total = singles.reduce(function (acc, s) {
//   return acc + s;
// }, 0);
// console.log("///////////", total);

// // find biggest value of array

// const biggest = singles.reduce(function (acc, i) {
//   return acc > i ? acc : i;
// }, singles[0]);
// console.log(biggest);

// // #challenge 2
// // convert dog ages to human ages and
// // calculate the average age of dogs in kate & julia studies

// // create a function

// const calcAverageHumanAge = function (ages) {
//   // formula of human ages by dog ages
//   const humanAges = ages.map(function (el, i, arr) {
//     return el <= 2 ? el * 2 : 16 + el * 4;
//   });
//   const adults = humanAges.filter(function (el, i, arr) {
//     return el >= 18;
//   });
//   console.log(humanAges);
//   console.log(adults);
//   const average =
//     adults.reduce(function (acc, el, i, arr) {
//       return acc + el;
//     }, 0) / adults.length;
//   return average;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
// // data1  [5, 2, 4, 1, 15, 8, 3];
// // data 2 [16,6,10,5,6 ,1,4]

// //////////////

// // The Magic of Chaining Methods

// const nums = [1, 2, 3, 4, 5];
// const changed = nums
//   .filter((el) => el > 2)
//   .map((el) => el * 2)
//   .reduce((acc, el) => acc + el, 0);
// console.log(changed);

// // #challenge 3
// // data1  [5, 2, 4, 1, 15, 8, 3];
// // data 2 [16,6,10,5,6 ,1,4]

// const calcAverageHumanAge2 = (ages) => {
//   ////////// start
//   const average = ages
//     .map(function (el, i, arr) {
//       return el <= 2 ? el * 2 : 16 + el * 4;
//     })
//     .filter(function (el, i, arr) {
//       return el >= 18;
//     })
//     .reduce(function (acc, el, i, arr) {
//       return acc + el / arr.length;
//     }, 0);
//   console.log(average);

//   ///////end
// };
// calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// // find method

// const account1 = { owner: "ali" };
// const account2 = { owner: "sara" };
// const all = [account1, account2];

// const specific = all.find(function (el, i, arr) {
//   return el.owner === "sara";
// });
// console.log(specific);

// const n = [1, 2, 3];
// const d = n.find(function (el, i, arr) {
//   return el > 1;
// });
// console.log(d);

// const found = accounts.find(function (el) {
//   return el.owner === "Jonas Schmedtmann";
// });
// console.log(found);

// // with for of

// for (const el of accounts) {
//   if (el.owner === "Jonas Schmedtmann") {
//     console.log(el);
//   }
// }
// // //////////////
// the findlast and find lastindex methods

const arr = [1, 2, 3, 4, 5, 6];
const lastEven = arr.findLast((el) => el % 2 === 0);
console.log(lastEven);
