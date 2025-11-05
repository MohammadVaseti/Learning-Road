import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function formatUser(user) {
    return user.firstName + " " + user.lastName;
  }

  function greeting(user) {
    if (user) {
      return <h1>hello {formatUser(user)}</h1>;
    } else {
      return <p>hello stranger</p>;
    }
  }

  const user = {
    firstName: "mohammad",
    lastName: "vaseti",
  };
  return <div> {greeting(user)}</div>;
}

export default App;
