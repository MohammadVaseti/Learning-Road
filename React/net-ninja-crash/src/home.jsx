const Home = () => {
  const handleClick = () => {
    console.log("clicked");
  };
  const handleClick2 = (name) => {
    console.log("hello" + name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick} className="btn">
        Click me
      </button>
      <button
        onClick={() => {
          handleClick2("mohammad");
        }}
      ></button>
    </div>
  );
};

export default Home;
