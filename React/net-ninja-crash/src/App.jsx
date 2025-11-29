import Navbar from "./navbar";
import Home from "./home";

function App() {
  const title = "Welcom To New Blog";
  const likes = 50;
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
