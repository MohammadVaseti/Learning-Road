import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let a = (user) => {
    return obj.first;
  };
  const obj = {
    first: "mohammad",
  };

  const me = "mohammad vaseti";
  const element = <h1>hello and welcome to react</h1>;

  function greeting() {
    return <h1>hello</h1>;
  }

  return (
    <div>
      {me}
      {element}
      {a()}
      {greeting()}
    </div>
  );
}

export default App;
