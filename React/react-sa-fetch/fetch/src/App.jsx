import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Contact />} />
      </Routes>
    </Router>
  </>;
}

export default App;
