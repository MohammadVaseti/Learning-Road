import { useState } from "react";

const Age = () => {
  const [name, setName] = useState("");

  return (
    <>
      <input type="text" placeholder="Enter Your Name" />
      <button>Predict</button>
      <h1></h1>
    </>
  );
};

export default Age;
