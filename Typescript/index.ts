// primitive data types

let message: string = "hello";
console.log(message);

let myName: string = "mohammad";
let score: number = 18;
let isProgrammer: boolean = true;

let number: number[] = [1, 2, 3];
let cities: Array<string> = ["tehran", "tabriz"];

// tuple

let person: [string, number] = ["amir", 27];

let user: {
  name: string;
  age: number;
} = {
  name: "ali",
  age: 26,
};

let rnd: any = "hi";
rnd = 55;

// enum
enum direction {
  up,
  left,
  right,
  down,
}

let move: direction = direction.left;
console.log(move);

enum color {
  red = "red",
  blue = "blue",
}

let col: color = color.blue;
console.log(col);

function greeting(name: string, age?: number): string {
  return `you are ${name} and ${age} years old`;
}

console.log(greeting("ali", 29));

function logMessage(message: string): void {
  console.log(`this is : ${message}`);
}
logMessage("my message");

function combine(a: string | number, b: string | number) {
  return a + b;
}

console.log(combine(10, 20));
console.log(combine("h", "a"));

// function overloading

enum todoStatus {
  pending = "wait",
  inProgress = "doing",
  done = "finished",
}

let tasks: Array<{ id: number; title: string; status: todoStatus }> = [];

function addTasks(title: string, status: todoStatus): void {
  const newTask = { id: tasks.length + 1, title, status };
  tasks.push(newTask);
  console.log(`task ${title} added`);
}

function showTask() {
  tasks.map((task) => {
    console.log(`${task.id} - ${task.title} - ${task.status}`);
  });
}

function updateTask(id: number, newStatus: todoStatus): void {
  let task = tasks.find((item) => {
    item.id == id;
  });
  if (task) {
    task.status = newStatus;
    console.log("task status updated");
  } else {
    console.log("not found");
  }
}
addTasks("learning TS", todoStatus.pending);
addTasks("going to bazzar", todoStatus.done);
updateTask(1, todoStatus.inProgress);
showTask();

// interface
interface User {
  id: number;
  name: string;
  email: string;
}

const userInfo: User = {
  id: 1,
  name: "mohammad",
  email: "mohammad.com",
};

console.log(userInfo.name);

function userInfo2(user: User) {
  console.log(user.email);
}
userInfo2(userInfo);

// type

type Information = {
  id: number;
  name: string;
};
const user2: Information = {
  id: 3,
  name: "ali",
};

// type for tuple

type arr = [number, string];
const myArr: arr = [1, "maryam"];
console.log(myArr[1]);

// interface extends

interface Person {
  name: string;
}
interface Employee extends Person {
  id: number;
}
const company: Employee = {
  name: "soha",
  id: 10,
};
console.log(company.name);

// type &
type child = {
  name: string;
};
type student = child & {
  id: number;
};
const a: student = {
  name: "saadoun",
  id: 34,
};
console.log(a.name);

interface Game {
  id: number;
  title: string;
  genre: string;
  releaseDate: number;
  rate: number;
  multi: boolean;
}
