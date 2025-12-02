import { useState } from "react";

const Home = () => {
  const [bolgs, setBlogs] = useState([
    {
      title: "My New Websie",
      body: " lorem ipsom ...",
      id: 1,
      author: " mohammad",
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

  return (
    <div className="home">
      {bolgs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
