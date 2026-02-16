import { useState } from "react";

type User1 = {
  name: string;
  age: number;
};

type User2 = {
  childre: string[];
};

const Article = () => {
  const [state, setState] = useState<string>("hi");

  return (
    <>
      <h1>{state}</h1>
    </>
  );
};

export default Article;
