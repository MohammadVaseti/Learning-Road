function App() {
  const title = "Welcom To New Blog";
  const likes = 50;
  return (
    <div className="content">
      <h1>{title}</h1>
      <p>Liked {likes} Times</p>
    </div>
  );
}

export default App;
