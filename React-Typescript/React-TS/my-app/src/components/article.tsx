import { useState } from "react";

const Article = () => {
  const [state, setState] = useState<string>("hi");

  return (
    <>
      <h1>{state}</h1>
    </>
  );
};

export default Article;
