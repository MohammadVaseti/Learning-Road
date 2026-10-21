import { useState } from "react";

const Changeprofile = (props) => {
  const [newUserName, setNewUserName] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button onClick={() => props.setusername(newUserName)}>
        change username
      </button>
    </>
  );
};

export default Changeprofile;
