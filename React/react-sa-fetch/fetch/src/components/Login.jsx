import { useState } from "react";

const Login = () => {
  const [newUser, setNewUser] = useState("");

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
