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
                    <button className="about-btn">About Me</button>
                </div>
                <div>
                    <button className="resume-btn">Resume</button>
                </div>
            </div>

        </div>
    )
}

export default Home;