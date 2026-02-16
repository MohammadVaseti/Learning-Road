import { useState } from "react";

type User1 = {
  name: string;
  age: number;
};

type User2 = User1 & {
  children: string[];
};

let user: User2 = {};
let user1: User1 = {};

interface users1 {
  name: string;
  age: number;
}

interface users2 extends users1 {
  children: string[];
}
let a: users2 = {};

const Article = () => {
  const [state, setState] = useState<string>("hi");

  return (
    <>
      <h1>{state}</h1>
    </>
  );
};

export default Article;
