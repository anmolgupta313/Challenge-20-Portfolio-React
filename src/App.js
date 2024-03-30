import { useState, useEffect } from "react";
import { HashRouter,BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./component/navbar";
import Home from "./component/pages/home";
import About from "./component/pages/about-me";
import Portfolio from "./component/pages/portfolio";
import Resume from "./component/pages/resume";
import Contact from "./component/pages/contact";
import Footer from "./component/footer";
function App() {
  const [windowDimenssion, detectW] = useState({
    minWidth: window.innerWidth,
  });

  const detectSize = () => {
    detectW({
      minWidth: window.innerWidth,
    });
  };

  return (
    <HashRouter>
      <Header windowDimenssion={windowDimenssion} detectSize={detectSize} />
      <div className="App">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/About" Component={About} />
          <Route path="/Portfolio" Component={Portfolio} />
          <Route path="/Resume" Component={Resume} />
          <Route path="/Contact" Component={Contact} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
