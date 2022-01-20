import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Protfolio from "./components/protfolio/Protfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import { About } from "./components/about/About";
import "./app.scss";
import Menu from "./components/menu/Menu";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Protfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
