import { useContext } from "react";
import { profileContext } from "../App";
import { useQuery } from "@tanstack/react-query";
const Home = (props) => {
  const { username } = useContext(profileContext);
  const {} = useQuery();
  return (
    <>
      <h1>home page username is - {username}</h1>
    </>
  );
};

export default Home;
