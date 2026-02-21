// primitive data types
let message = "hello";
console.log(message);
let myName = "mohammad";
let score = 18;
let isProgrammer = true;
let number = [1, 2, 3];
let cities = ["tehran", "tabriz"];
// tuple
let person = ["amir", 27];
let user = {
    name: "ali",
    age: 26,
};
let rnd = "hi";
rnd = 55;
// enum
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["left"] = 1] = "left";
    direction[direction["right"] = 2] = "right";
    direction[direction["down"] = 3] = "down";
})(direction || (direction = {}));
let move = direction.left;
console.log(move);
var color;
(function (color) {
    color["red"] = "red";
    color["blue"] = "blue";
})(color || (color = {}));
let col = color.blue;
console.log(col);
function greeting(name, age) {
    return `you are ${name} and ${age} years old`;
}
console.log(greeting("ali", 29));
function logMessage(message) {
    console.log(`this is : ${message}`);
}
logMessage("my message");
function combine(a, b) {
    return a + b;
}
console.log(combine(10, 20));
console.log(combine("h", "a"));
export {};
//# sourceMappingURL=index.js.map