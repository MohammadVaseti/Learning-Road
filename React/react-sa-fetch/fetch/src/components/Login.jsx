import { useState } from "react";

const Login = () => {
  const [newUser, setNewUser] = useState();

  return (
    <>
      <h1>login</h1>
      <button>login</button>
      <button>logout</button>
    </>
  );
};

export default Login;
