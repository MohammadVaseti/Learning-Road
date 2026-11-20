import { useState } from "react";
import { login, logout } from "./Store";
import { useDispatch } from "react-redux";

const Login = () => {
  const [newUser, setNewUser] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <h1>login</h1>
      <input
        onChange={(event) => {
          setNewUser(event.target.value);
        }}
      />
      <button>login</button>
      <button>logout</button>
    </>
  );
};

export default Login;
