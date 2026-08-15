import axios, { Axios } from "axios";
import { useState } from "react";

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const [catFact, setCatFact] = useState("");

  const getFetch = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setCatFact(res.data.fact));
  };

  return (
    <>
      <button onClick={getFetch}>Fetch</button>
      <p>{catFact}</p>
    </>
  );
}

export default App;
