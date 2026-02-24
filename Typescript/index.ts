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
    return item.id == id;
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
  readonly id: number;
  title: string;
  genre: string;
  releaseDate: number;
  rate: number;
  multi?: boolean;
}
// ///////////////////////
const games: Game[] = [
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

function filterByGenre(games: Game[], genre: string) {
  return games.filter((item) => {
    return item.genre == genre;
  });
}

console.log(filterByGenre(games, "action"));

function findMulti(games: Game[]) {
  return games.filter((item) => {
    return item.multi == true;
  });
}
console.log(findMulti(games));

// ///////////////

class Person {
  constructor(name: string, age: number) {
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
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`hi i am ${this.name} and ${this.age} years old`);
  }
}

const person2 = new Person2("ati", 27);
person2.introduce();

class User {
  public name: string;
  private email: string;
  protected status: string;

  constructor(name: string, email: string, status: string) {
    this.name = name;
    this.email = email;
    this.status = status;
  }
  public userinfo() {
    console.log(`name is : ${this.name} status is${this.status}`);
  }

  public updateStatus(newStatus: string) {
    this.status = newStatus;
  }

  private getEmail() {
    return this.email;
  }
}

class Admin extends User{
  constructor(name:string , email:string status :string){
    super(name , email , status)
  }

 public getAdminInfo(){
    console.log(`${this.name} & ${this.status}`);
  }


  public getEmail(){
      console.log(this.getEmail()); 
  }
}



const userforClass = new User("haji", "haji.com", "active");
userforClass.userinfo();


// generics

function showFirst<T>(arr : T[]) : T{
  return arr[0]
}




console.log(showFirst(['amin', 'nima', 'sara']));


interface box<T>{
  content :T
}
let box1 : box<number> = {
  content : 10
}

console.log(box1.content);





namespace product {
  interface Product {
    readonly id : number
    name : string ,
    price : number ,

  }
  const products : Product[]= [
    {id:1 , name:'laptop' , price : 10000} ,
     {id:2 , name:'pc' , price : 210000} ,
      {id:3 , name:'xbox' , price : 150000}
  ]

 export function listProduct () : string{
  return products.map((item)=>{
    return console.log(item);
  })
}


}
product.listProduct()
