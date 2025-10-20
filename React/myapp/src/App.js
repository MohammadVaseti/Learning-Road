import logo from "./logo.svg";
import "./App.css";

function App() {
  function username(user) {
    return user.f + " " + user.l;
  }
  const userObj = {
    f: "mohammad",
    l: "vaseti",
  };
  const name = "mohammad";
  const element = <h1>hi there</h1>;
  return (
    <div>
      <div>{name}</div>
      <div>{element}</div>
      <div>{username(userObj)}</div>
    </div>
  );
}

export default App;
