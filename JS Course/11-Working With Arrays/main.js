// // // //simple array methods

// // // //    slice method
// // // const arr = [1, 2, 3, 4, 5];
// // // console.log(arr.slice(0, 2));
// // // console.log(arr.slice(-1));
// // // console.log(arr.slice(-2));
// // // console.log(arr.slice(2));
// // // console.log(arr);

// // // // splice method
// // // console.log(arr.splice(1, 3));
// // // console.log(arr.splice(-2));
// // // console.log(arr);
// // // console.log(arr.splice(3));
// // // console.log(arr.slice(-2));
// // // console.log(arr);

// // // //reverse method
// // // console.log(arr.reverse());

// // // //concat method
// // // const arr2 = [6, 7];
// // // console.log(arr.concat(arr2));
// // // console.log([...arr, ...arr2]);

// // // //  join method
// // // console.log(arr.join("#"));
// // // ///////////////////////////////////////////

// // // //new at method

// // // console.log(arr.at(2));
// // // console.log(arr.at(-2));
// // // console.log("hello".at(-1));

// // /////////////////

// // // looping array : forEach

// // // looping Arrays forEach
// // // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // // movements.forEach(function(cv,i,arr){
// // //   console.log(cv);
// // // })

// // // const arr = [1, 2, 3];
// // // arr.forEach(function (value, index, arr) {
// // //   console.log(value, index, arr);
// // // });

// // // // /////////////

// // // const movements = [200, -100, 300, -50];

// // // movements.forEach(function (mov, i) {
// // //   if (mov > 0) {
// // //     console.log(`Movement ${i + 1}: You deposited ${mov}`);
// // //   } else {
// // //     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// // //   }
// // // });

// // // const arr2 = ["ali", "mohammad"];

// // // arr2.forEach(function (value, index, arr2) {
// // //   console.log(`your name is ${value} on number ${index + 1}`);
// // // });

// // // forEach with maps and sets

// // // maps
// // const map = new Map([
// //   ["usd", "united states"],
// //   ["eur", "euro"],
// //   ["gbp", "pound sterling"],
// // ]);

// // map.forEach(function (value, index, map) {
// //   console.log(`${value} : ${index}`);
// // });

// // // sets
// // console.log("set");
// // const mySet = new Set(["eur", "eur", "usd"]);

// // mySet.forEach(function (value, _, mySet) {
// //   console.log(`${(value, _)}`);
// // });

// // //* creating DOM Elements

// // // usage of insertAdjacentHTML
// // let h1 = document.querySelector("h1");
// // const html = `hello this is for test ${2 + 2}`;
// // h1.insertAdjacentHTML("afterbegin", html);

// // // diffrence between innerHTML & textContent
// // h1.innerHTML = `<a herf='#'>link</a> with codes`;
// // h1.textContent += `<a herf='#'>link</a> without codes`;
// // // *Challeng#1
// // const julia1 = [3, 5, 2, 12, 17];
// // const julia1c = [...julia1];
// // // delete index 5,2,12
// // // an array with corrected julia and kate

// // const kate1 = [4, 1, 15, 8, 3];

// // const julia2 = [9, 16, 6, 8, 3];
// // const kate2 = [10, 5, 6, 1, 4];

// // const checkDogs = function (arr1, arr2) {
// //   const newArr1 = arr1.splice(1, 2);

// //   const bothArr = [...newArr1, ...arr2];

// //   bothArr.forEach(function (v, i, bothArr) {
// //     if (v >= 3) {
// //       console.log(`the dog number ${i + 1} age = ${v} is adult`);
// //     } else {
// //       console.log(`the dog number ${i + 1} age = ${v} is pupy`);
// //     }
// //   });
// // };

// // checkDogs(julia1, kate1);
// // console.log("////data2");
// // checkDogs(julia2, kate2);

// // //* */ data tranformations map,filter,reduce

// // // map
// // const movements = [200, -100, 300, 150];

// // const eurToUsd = 2;
// // const movementsUSD = movements.map(function (el, i, movements) {
// //   console.log(el * eurToUsd);
// // });

// // // filter
// // movements.filter(function (e, i, movements) {
// //   if (e > 100) {
// //     console.log(e, i);
// //   }
// // });

// // // reduce
// // const result = movements.reduce(function (acc, el, i, movements) {
// //   return acc + el;
// // }, 0);
// // console.log(result);
// // ////////////////////////////////////////
// // // *the map method
// // const money = [100, 200, 300];
// // money.map(function (val, ind, money) {
// //   console.log("//////", val * 2);
// // });

// // // with for of

// // for (const m of money) {
// //   console.log(m * 3);
// // }
// // // with arrow function
// // const withArrow = money.map((el, i, arr) => el * 3);
// // console.log(withArrow);

// // // *computing username

// // // *the filter method

// // // the challenge fo last of video  => show widthrawals

// // const movements2 = [200, -100, 300, -50, -255];

// // const widthrawals = movements2.filter(function (v, i) {
// //   return v < 0;
// // });
// // console.log(widthrawals);

// // // the reduce method

// // const singles = [10, 333, 20, -5];

// // const total = singles.reduce(function (acc, s) {
// //   return acc + s;
// // }, 0);
// // console.log("///////////", total);

// // // find biggest value of array

// // const biggest = singles.reduce(function (acc, i) {
// //   return acc > i ? acc : i;
// // }, singles[0]);
// // console.log(biggest);

// // // #challenge 2
// // // convert dog ages to human ages and
// // // calculate the average age of dogs in kate & julia studies

// // // create a function

// // const calcAverageHumanAge = function (ages) {
// //   // formula of human ages by dog ages
// //   const humanAges = ages.map(function (el, i, arr) {
// //     return el <= 2 ? el * 2 : 16 + el * 4;
// //   });
// //   const adults = humanAges.filter(function (el, i, arr) {
// //     return el >= 18;
// //   });
// //   console.log(humanAges);
// //   console.log(adults);
// //   const average =
// //     adults.reduce(function (acc, el, i, arr) {
// //       return acc + el;
// //     }, 0) / adults.length;
// //   return average;
// // };
// // console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// // console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
// // // data1  [5, 2, 4, 1, 15, 8, 3];
// // // data 2 [16,6,10,5,6 ,1,4]

// // //////////////

// // // The Magic of Chaining Methods

// // const nums = [1, 2, 3, 4, 5];
// // const changed = nums
// //   .filter((el) => el > 2)
// //   .map((el) => el * 2)
// //   .reduce((acc, el) => acc + el, 0);
// // console.log(changed);

// // // #challenge 3
// // // data1  [5, 2, 4, 1, 15, 8, 3];
// // // data 2 [16,6,10,5,6 ,1,4]

// // const calcAverageHumanAge2 = (ages) => {
// //   ////////// start
// //   const average = ages
// //     .map(function (el, i, arr) {
// //       return el <= 2 ? el * 2 : 16 + el * 4;
// //     })
// //     .filter(function (el, i, arr) {
// //       return el >= 18;
// //     })
// //     .reduce(function (acc, el, i, arr) {
// //       return acc + el / arr.length;
// //     }, 0);
// //   console.log(average);

// //   ///////end
// // };
// // calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// // calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

// // // find method

// // const account1 = { owner: "ali" };
// // const account2 = { owner: "sara" };
// // const all = [account1, account2];

// // const specific = all.find(function (el, i, arr) {
// //   return el.owner === "sara";
// // });
// // console.log(specific);

// // const n = [1, 2, 3];
// // const d = n.find(function (el, i, arr) {
// //   return el > 1;
// // });
// // console.log(d);

// // const found = accounts.find(function (el) {
// //   return el.owner === "Jonas Schmedtmann";
// // });
// // console.log(found);

// // // with for of

// // for (const el of accounts) {
// //   if (el.owner === "Jonas Schmedtmann") {
// //     console.log(el);
// //   }
// // }
// // // //////////////
// // the findlast and find lastindex methods

// // const arr = [1, 2, 3, 4, 5, 6];
// // const lastEven = arr.findLast((el) => el % 2 === 0);
// // console.log(lastEven);

// // const lastEvenIndex = arr.findLastIndex((el) => el % 2 === 0);
// // console.log(lastEvenIndex);

// // flat flatMap

// // const arr = [1, 2, [3, 4], [5, [6, 7]]];
// // console.log(arr.flat(1));
// // console.log(arr.flat(2));

// // console.log(arr.flatMap((el) => el));
// // this one can flat just 1 level

// // ////////////////////////

// // // Coding Challenge #4

// // /*
// // This time, Julia and Kate are studying the activity levels of different dog breeds.

// // YOUR TASKS:
// // 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// // 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
// // 3. Create an array "allActivities" of all the activities of all the dog breeds
// // 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
// // 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// // 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// // 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

// // BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

// // TEST DATA:
// // */

// // /*
// // const breeds = [
// //   {
// //     breed: "German Shepherd",
// //     averageWeight: 32,
// //     activities: ["fetch", "swimming"],
// //   },
// //   {
// //     breed: "Dalmatian",
// //     averageWeight: 2,
// //     activities: ["running", "fetch", "agility"],
// //   },
// //   {
// //     breed: "Labrador",
// //     averageWeight: 28,
// //     activities: ["swimming", "fetch"],
// //   },
// //   {
// //     breed: "Beagle",
// //     averageWeight: 12,
// //     activities: ["digging", "fetch"],
// //   },
// //   {
// //     breed: "Husky",
// //     averageWeight: 26,
// //     activities: ["running", "agility", "swimming"],
// //   },
// //   {
// //     breed: "Bulldog",
// //     averageWeight: 36,
// //     activities: ["sleeping"],
// //   },
// //   {
// //     breed: "Poodle",
// //     averageWeight: 18,
// //     activities: ["agility", "fetch"],
// //   },
// // ];

// // // 1.
// // const huskyWeight = breeds.find((el) => el.breed === "Husky").averageWeight;

// // // 2.
// // const dogBothActivities = breeds.find(
// //   (el) => el.activities.includes("fetch") && el.activities.includes("running")
// // ).breed;

// // // 3.

// // // const allActivities = breeds
// // //   .map(function (v, i, arr) {
// // //     return v.activities;
// // //   })
// // //   .flat()

// // const allActivities = breeds.flatMap(function (v, i, arr) {
// //   return v.activities;
// // });
// // console.log(allActivities);

// // // 4.

// // const unqueActivities = [...new Set(allActivities)];
// // console.log(unqueActivities);

// // // 5.
// // const swimmingAdjacent = new Set(
// //   breeds
// //     .map(function (v, i, arr) {
// //       return v.activities;
// //     })
// //     .filter(function (v, i, arr) {
// //       return v.includes("swimming");
// //     })
// //     .flatMap((el) => el)
// //     .filter((el) => el !== "swimming")
// // );

// // console.log(swimmingAdjacent);

// // // 6.
// // const weights = breeds.flatMap(function (v, i, arr) {
// //   return v.averageWeight;
// // });
// // weights >= 10 ? console.log("true") : console.log("false");

// // // console.log(breeds.every((el) => el.averageWeight >= 10));

// // // 7

// // const allActive = breeds.some((el) => el.activities.length >= 3);
// // console.log(allActive);

// // // hint max weight

// // const nums = breeds
// //   .filter(function (v, i, arr) {
// //     return v.activities.includes("fetch");
// //   })
// //   .map(function (v, i, arr) {
// //     return v.averageWeight;
// //   });
// // console.log(nums);
// // console.log(nums.reduce((acc, v, i) => (acc > v ? acc : v), nums[0]));

// //
// // Array Grouping

// // const people = [
// //   { name: "ali", age: 25 },
// //   { name: "moh", age: 21 },
// //   { name: "sara", age: 27 },
// //   { name: "reza", age: 24 },
// // ];

// // const gr = Object.groupBy(people, (person) => person.age > 25);
// // console.log(gr);

// // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// // const grouped = Object.groupBy(nums, (num) => (num % 2 == 0 ? "zoj" : "fard"));
// // console.log(grouped);

// // // More Ways of Creating and Filling Arrays
// // const x = new Array(7);

// // console.log(x);

// // console.log(x.fill(7));

// // const y = Array.from({ length: 5 }, (_, i) => i + 1);
// // console.log(y);

// //
// // Non-Destructive Alternatives: toReversed, toSorted, toSpliced, with

// // const arr = [10, 20, 30, 40, 15];
// // const newArr = arr.toReversed();
// // console.log(arr, newArr);

// // const newArr2 = arr.toSorted();
// // console.log(arr, newArr2);

// // const newArr3 = arr.toSpliced(1, 2);
// // console.log(arr, newArr3);

// // const newArr4 = arr.with(2, 99);
// // console.log(arr, newArr4);

// // Coding Challenge #5

// /*
// Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

// - Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// - Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// - Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

// YOUR TASKS:
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
// 9. Group the dogs by the number of owners they have
// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
//   { weight: 18, curFood: 244, owners: ['Joe'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach(function (dog, i, arr) {
  dog.recFood = Math.floor(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2.

const saraDog = dogs.filter(function (v, i, arr) {
  if (v.owners.includes("Sarah")) {
    return v.curFood > v.recFood
      ? console.log("too much")
      : console.log(" too low");
  }
});

// 3.
const much = dogs
  .filter(function (v, i, arr) {
    return v.curFood > v.recFood;
  })
  .map((v, i) => v.owners)
  .flat();
console.log(much);

const little = dogs
  .filter(function (v, i, arr) {
    return v.curFood < v.recFood;
  })
  .map((v, i) => v.owners)
  .flat();
console.log(little);

// 4.
const str1 = much.toString().replaceAll(",", " and ");
const str2 = little.toString().replaceAll(",", " and ");

console.log(`${str1} dogs eat too much / ${str2} dogs eat too little`);

// 5.

const equal = dogs.some((el) => el.curFood === el.recFood);
console.log(equal);

// 6.

console.log(
  dogs.every(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 7.
const con = dogs.filter(
  (dog, i) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(con);

// 8.
const grouped = Object.groupBy(dogs, (el) => {
  if (el.curFood === el.recFood) {
    return "normal";
  } else if (el.curFood > el.recFood) {
    return "to much";
  } else {
    return "to low";
  }
});
console.log(grouped);
