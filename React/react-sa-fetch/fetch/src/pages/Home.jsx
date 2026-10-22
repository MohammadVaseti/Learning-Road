import { useContext } from "react";
import { profileContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

const Home = (props) => {
  const { username } = useContext(profileContext);
  const {} = useQuery(["cat"], () => {
    Axios.get("https://catfact.ninja/fact");
  });
  return (
    <>
      <h1>home page username is - {username}</h1>
    </>
  );
};

export default Home;
