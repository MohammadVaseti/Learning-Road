import { useState } from "react";

const Home = () => {
  const [bolgs, setBlogs] = useState([
    {
      title: "My New Websie",
      body: " lorem ipsom ...",
      id: 1,
      author: " Mohammad",
    },
    {
      title: "Welcome Party",
      body: " lorem ipsom ...",
      id: 2,
      author: "Ali",
    },
    {
      title: "Top Tips To Be a Developer",
      body: " lorem ipsom ...",
      id: 3,
      author: "Hossein",
    },
  ]);

  return <div className="home"></div>;
};

export default Home;
