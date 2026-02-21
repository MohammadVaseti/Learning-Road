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

function combine(a: string | number, b: string | number) {}
