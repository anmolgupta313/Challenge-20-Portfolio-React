import React from "react";

function Navbar(){
    return(
        <nav className="nav">
            <div className="logo-nav">
                <p>Anmol Gupta</p>
            </div>
            <div className="nav-link">
                <ul>
                    <div><a href="#"><li>About Me</li></a></div>
                    <div><a href="#"><li>Portfolio</li></a></div>
                    <div><a href="#"><li>Contact</li></a></div>
                    <div><a href="#"><li>Resume</li></a></div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;