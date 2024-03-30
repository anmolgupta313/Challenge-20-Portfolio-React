import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="main-div">
            <div className="div-headingone">
                <h1>Hello I'm</h1>
            </div>

            <div className="div-headingtwo">
                <h2>Anmol Gupta</h2>
            </div>
            <div className="div-para">
                <p>Website Designer And Developer</p>
            </div>
            <div className="div-btn">
                <div>
                  <Link to="/About">  <a href="">  <button className="about-btn" >About Me</button></a></Link>
                </div>
                <div>
                 <Link to="Resume"> <a href="">  <button className="resume-btn" >Resume</button></a></Link>
                </div>
            </div>

        </div>
    )
}

export default Home;