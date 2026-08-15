function App() {
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <>
      <button>Fetch</button>
      <p></p>
    </>
  );
}

export default App;
