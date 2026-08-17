import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import Age from "./Age";

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const [catFact, setCatFact] = useState("");
  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setCatFact(res.data.fact));
  };

  return (
    <>
      <button onClick={fetchFact}>Fetch</button>
      <p>{catFact}</p>

      <Age />
    </>
  );
}

export default App;
