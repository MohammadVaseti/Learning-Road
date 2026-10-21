import { createContext, useContext, useState } from "react";
import { profileContext } from "../App";

const Changeprofile = () => {
  const [newUserName, setNewUserName] = useState("");
  const { setUsername } = useContext(profileContext);

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button onClick={() => setUsername(newUserName)}>change username</button>
    </>
  );
};

export default Changeprofile;
