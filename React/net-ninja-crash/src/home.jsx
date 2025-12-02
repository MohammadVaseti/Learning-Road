import { useState } from "react";

const Home = () => {
  // let name = "mohammad";

  const [name, setName] = useState("mohammad");

  const handleClick = () => {
    setName("rafigh");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick} className="btn">
        Click me
      </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
