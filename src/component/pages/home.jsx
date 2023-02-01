import React from "react";

function Home({pageChange}) {
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
                  <a href="#about">  <button className="about-btn" onClick={()=>{pageChange('About')}}>About Me</button></a>
                </div>
                <div>
                    <button className="resume-btn"onClick={()=>{pageChange('Resume')}}>Resume</button>
                </div>
            </div>

        </div>
    )
}

export default Home;