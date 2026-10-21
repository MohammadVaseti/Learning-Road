import { useState } from "react";

const Changeprofile = () => {
  const [newUserName, setNewUserName] = useState("");

  return (
    <>
      <input type="text" />
      <button>change username</button>
    </>
  );
};

export default Changeprofile;
