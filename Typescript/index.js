// primitive data types
var message = "hello";
console.log(message);
var myName = "mohammad";
var score = 18;
var isProgrammer = true;
var number = [1, 2, 3];
var cities = ["tehran", "tabriz"];
// tuple
var person = ["amir", 27];
var user = {
    name: "ali",
    age: 26,
};
var rnd = "hi";
rnd = 55;
// enum
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["left"] = 1] = "left";
    direction[direction["right"] = 2] = "right";
    direction[direction["down"] = 3] = "down";
})(direction || (direction = {}));
var move = direction.up;
console.log(move);
