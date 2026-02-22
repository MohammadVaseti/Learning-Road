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
// function overloading
var todoStatus;
(function (todoStatus) {
    todoStatus["pending"] = "wait";
    todoStatus["inProgress"] = "doing";
    todoStatus["done"] = "finished";
})(todoStatus || (todoStatus = {}));
let tasks = [];
function addTasks(title, status) {
    const newTask = { id: tasks.length + 1, title, status };
    tasks.push(newTask);
    console.log(`task ${title} added`);
}
function showTask() {
    tasks.map((task) => {
        console.log(`${task.id} - ${task.title} - ${task.status}`);
    });
}
function updateTask(id, newStatus) {
    let task = tasks.find((item) => {
        return item.id == id;
    });
    if (task) {
        task.status = newStatus;
        console.log("task status updated");
    }
    else {
        console.log("not found");
    }
}
addTasks("learning TS", todoStatus.pending);
addTasks("going to bazzar", todoStatus.done);
updateTask(1, todoStatus.inProgress);
showTask();
const userInfo = {
    id: 1,
    name: "mohammad",
    email: "mohammad.com",
};
console.log(userInfo.name);
function userInfo2(user) {
    console.log(user.email);
}
userInfo2(userInfo);
const user2 = {
    id: 3,
    name: "ali",
};
const myArr = [1, "maryam"];
console.log(myArr[1]);
const company = {
    name: "soha",
    id: 10,
};
console.log(company.name);
const a = {
    name: "saadoun",
    id: 34,
};
console.log(a.name);
// ///////////////////////
const games = [
    {
        id: 1,
        title: "fifa",
        genre: "sport",
        releaseDate: 2026,
        rate: 6.0,
        multi: true,
    },
    {
        id: 2,
        title: "battlefield",
        genre: "action",
        releaseDate: 2024,
        rate: 4.0,
        multi: true,
    },
    {
        id: 3,
        title: "god of war",
        genre: "action",
        releaseDate: 2023,
        rate: 6.0,
    },
];
function filterByGenre(games, genre) {
    return games.filter((item) => {
        return item.genre == genre;
    });
}
console.log(filterByGenre(games, "action"));
function findMulti(games) {
    return games.filter((item) => {
        return item.multi == true;
    });
}
console.log(findMulti(games));
// ///////////////
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`hi i am ${this.name} and ${this.age} years old`);
    }
}
const person1 = new Person("reza", 25);
person1.introduce();
class Person2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`hi i am ${this.name} and ${this.age} years old`);
    }
}
const person2 = new Person2("ati", 27);
person2.introduce();
class User {
    name;
    email;
    status;
    constructor(name, email, status) {
        this.name = name;
        this.email = email;
        this.status = status;
    }
    userinfo() {
        console.log(`name is : ${this.name} status is${this.status}`);
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
    getEmail() {
        return this.email;
    }
}
class Admin extends User {
    constructor(name, email, status) {
        super(name, email, status);
    }
    getAdminInfo() {
        console.log(`${this.name} & ${this.status}`);
    }
    getEmail() {
        console.log(this.getEmail());
    }
}
const userforClass = new User("haji", "haji.com", "active");
userforClass.userinfo();
// generics
function showFirst(arr) {
    return arr[0];
}
console.log(showFirst(['amin', 'nima', 'sara']));
let box1 = {
    content: 10
};
console.log(box1.content);
var product;
(function (product) {
    const products = [
        { id: 1, name: 'laptop', price: 10000 },
        { id: 2, name: 'pc', price: 210000 },
        { id: 3, name: 'xbox', price: 150000 }
    ];
    function listProduct() {
        return products.map((item) => {
            return console.log(item);
        });
    }
    listProduct();
})(product || (product = {}));
export {};
//# sourceMappingURL=index.js.map