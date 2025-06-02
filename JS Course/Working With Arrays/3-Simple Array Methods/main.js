//    slice method
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 2));
console.log(arr.slice(-1));
console.log(arr.slice(-2));
console.log(arr.slice(2));
console.log(arr);

// splice method
console.log(arr.splice(1, 3));
console.log(arr.splice(-2));
console.log(arr);
console.log(arr.splice(3));
console.log(arr.slice(-2));
console.log(arr);

//reverse method
console.log(arr.reverse());
//concat method

const arr2 = [6, 7];

console.log(arr.concat(arr2));

console.log([...arr, ...arr2]);

//  join method
console.log(arr.join("#"));

//new at method

console.log(arr.at(2));
console.log(arr.at(-2));

console.log("hello".at(-1));
