import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
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
    {
      title: "Top Tips To Be a Developer",
      body: " lorem ipsom ...",
      id: 4,
      author: "Hossein",
    },
  ]);

  const [name, setName] = useState("mohammad");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect ran");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="all blogs !" handleDelete={handleDelete} />
      <button
        onClick={() => {
          setName("mohsen");
        }}
      >
        Chane Name
      </button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
