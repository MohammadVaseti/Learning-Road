import axios from "axios";
import { useState } from "react";

const Age = () => {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(0);

  const nameHolder = (event) => {
    setName(event.target.value);
  };

  const fetchAge = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      console.log(res.data);
      setPredictedAge(res.data.age);
    });
  };

  return (
    <>
      <input type="text" placeholder="Enter Your Name" onChange={nameHolder} />
      <button onClick={fetchAge}>Predict</button>
      <h1>
        Your Age is {predictedAge} your name is {name}
      </h1>
    </>
  );
};

export default Age;
