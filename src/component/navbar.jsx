import React from "react";

function Navbar(props){
    return(
        <nav className="nav">
            <div className="logo-nav">
                <p>Anmol Gupta</p>
            </div>
            <div className="nav-link">
                <ul>
                    <div><a href="#" onClick={props.pageChange('about')}><li>About Me</li></a></div>
                    <div><a href="#" onClick={props.pageChange('portfolio')}><li>Portfolio</li></a></div>
                    <div><a href="#" onClick={prope.pageChange('contact')}><li>Contact</li></a></div>
                    <div><a href="#" onClick={props.pageChange('resume')}><li>Resume</li></a></div>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;