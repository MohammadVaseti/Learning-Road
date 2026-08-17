import { useState } from "react";

const Age = () => {
  const [name, setName] = useState("");

  const nameHolder = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <input type="text" placeholder="Enter Your Name" onChange={nameHolder} />
      <button>Predict</button>
      <h1></h1>
    </>
  );
};

export default Age;
