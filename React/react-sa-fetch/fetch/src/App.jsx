function App() {
  fetch("https://catfact.ninja/fact");

  return (
    <>
      <button>Fetch</button>
      <p></p>
    </>
  );
}

export default App;
