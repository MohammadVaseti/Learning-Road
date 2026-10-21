import { useState } from "react";

const Changeprofile = () => {
  const [newUserName, setNewUserName] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button>change username</button>
    </>
  );
};

export default Changeprofile;
