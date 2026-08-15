import axios, { Axios } from "axios";

function App() {
  // fetch("https://catfact.ninja/fact")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  const getFetch = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => console.log(res.data.fact));
  };

  return (
    <>
      <button onClick={getFetch}>Fetch</button>
      <p></p>
    </>
  );
}

export default App;
