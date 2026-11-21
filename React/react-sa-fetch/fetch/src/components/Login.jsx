import { useState } from "react";
import { login, logout } from "../Store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [newUser, setNewUser] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state.user;
  });
  return (
    <>
      <h1>login {selector.username}</h1>
      <input
        onChange={(event) => {
          setNewUser(event.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(login({ username: newUser }));
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </>
  );
};

export default Login;
