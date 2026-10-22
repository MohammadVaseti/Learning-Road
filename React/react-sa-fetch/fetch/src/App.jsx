import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Not from "./pages/Not";
import Nav from "./pages/nav";
import Profile from "./pages/Profile";
import { useState, createContext } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const profileContext = createContext();

function App() {
  const client = new QueryClient();

  const [username, setUsername] = useState("saadoun");

  return (
    <div className="app">
      <profileContext.Provider value={{ username, setUsername }}>
        <Router>
          <h1>Saadoun</h1>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:name?" element={<Profile />} />
            <Route path="*" element={<Not />} />
          </Routes>
        </Router>
      </profileContext.Provider>
    </div>
  );
}

export default App;
