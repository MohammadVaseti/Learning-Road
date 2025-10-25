import logo from "./logo.svg";
import "./App.css";
import Welcome from "./Components/Welcome";
import Practical from "./Components/Practical";

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
      <>
        <Welcome user="saadoun"></Welcome>
        <Welcome user="nini"></Welcome>
        <Welcome user="rafiq"></Welcome>
      </>

      <>
        <Practical name="mohammad"></Practical>
      </>
      <>
        <Practical name="ali"></Practical>
      </>
      <>
        <Practical name="hossein"></Practical>
      </>
      <>
        <Practical name="ritzo"></Practical>
      </>
    </div>
  );
}

export default App;
