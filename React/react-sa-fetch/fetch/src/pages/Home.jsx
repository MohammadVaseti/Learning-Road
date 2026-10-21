import { useContext } from "react";
import { profileContext } from "../App";

const Home = (props) => {
  const { username } = useContext(profileContext);

  return (
    <>
      <h1>home page username is - {props.username}</h1>
    </>
  );
};

export default Home;
