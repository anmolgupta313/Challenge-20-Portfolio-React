import React from "react";

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
                    <a href="/About">  <button className="about-btn" >About Me</button></a>
                </div>
                <div>
                  <a href="/Resume">  <button className="resume-btn" >Resume</button></a>
                </div>
            </div>

        </div>
    )
}

export default Home;