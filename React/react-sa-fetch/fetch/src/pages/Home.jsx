import { useContext } from "react";
import { profileContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const { username } = useContext(profileContext);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  if (isLoading) {
    return <h2>در حال دریافت اطلاعات...</h2>;
  }

  if (isError) {
    return <h2>خطا در دریافت اطلاعات!</h2>;
  }

  return (
    <>
      <h1>نام کاربری: {username}</h1>
      <h2>{data?.fact}</h2>
    </>
  );
};

export default Home;
