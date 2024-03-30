import React from "react";


import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../component/css/header.css"
import hamburger from "../Assets/Images/hamburger.png";
// import logo from "../../logo/akicks.png";
import X from "../Assets/Images/x.png";

export default function Header({ windowDimenssion, detectSize }) {
  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenssion.minWidth]);
  const [menuToggle, setMenuToggel] = useState(false);

  function mToggel() {
    setMenuToggel((prev) => {
      return !prev;
    });

    console.log(menuToggle, "t");
  }
  return (
    <div className="nav-main-div">
      <div className="logo-nav">
      <a href="/"><p>Anmol Gupta</p></a>
      </div>

      {windowDimenssion.minWidth > 786 ? (
        <div className="main-nav-bar-links-div">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/About">About</Link>
            </li>

            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="/Resume">Resume</Link>
            </li>

            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          {/* <div className="search-div">
            <input
              placeholder="Search Sneakers"
              onChange={inputChange}
              type="text"
              value={inputValue}
            ></input>
          </div> */}

          {/* <div className="search-result-main-div">{searchDisplay} </div> */}
        </div>
      ) : menuToggle == false ? (
        <div onClick={mToggel}>
          <img className="hamburger-img" src={hamburger} alt="" />
        </div>
      ) : (
        <div className="main-nav-bar-links-div">


          <div className="logo-mobile-div">
          <div className="logo-nav">
      <a href="/"><p>Anmol <mark className="mark">Gupta</mark></p></a>
      </div>
      
      <div onClick={mToggel} className="x-div-main">
      
            <img className="closing-toggle-x" src={X} alt="" />
          </div></div> 
          
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/About">About</Link>
            </li>

            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="/Resume">Resume</Link>
            </li>

            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          {/* <div className="search-div">
            <input
              placeholder="Search Sneakers"
              onChange={inputChange}
              type="text"
              value={inputValue}
            ></input>
          </div>
  
          <div className="search-result-main-div">{searchDisplay} </div> */}
        </div>
      )}
    </div>
  );
}

