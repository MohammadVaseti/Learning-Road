// working with arrays Seasson

console.log(typeof Array);
const arr = [1, 2, 3, 4];
// console.log(typeof arr);
// slice
// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr.slice());
// its like [...arr]
// console.log([...arr]);

// splice
// console.log(arr.splice(2, 1));
// console.log(arr.splice(1, 3));
// console.log(arr);
// console.log(arr.splice(-2));

// reverse
// console.log(arr.reverse());
// concat
const arr2 = [5, 6, 7];
// console.log(arr.concat(arr2));
// // its like [...arr , ...arr2]
// console.log(...arr, ...arr2);

// join
// console.log(arr.join(" "));
const fName = ["mohammad", "ali"];
// console.log(fName.join(" "));

// at

// console.log(fName.at(0));

// forEach

arr.forEach(function (cv, i, myArr) {
  // console.log(myArr);
  console.log(cv, i);
});

for (const x of arr) {
  console.log(x, "////for of");
}
// diffrence is break & continue in for of
