import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const me = "mohammad vaseti";
  const element = <h1>hello and welcome to react</h1>;
  return (
    <div>
      {me}
      {element}
    </div>
  );
}

export default App;
