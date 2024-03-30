import React from "react";

import github from '../Assets/Images/github.png';
import linkedin from '../Assets/Images/linkedin.png'
import instagram from '../Assets/Images/instagram.png'

function Footer() {
    return (
        <div className="foot-div">
            <div className="icon-main-div">
                <div className="follow-div">
                    <p>Follow Me</p>
                </div>
                <div className="icon-div">
                    <div className="linkedIn-div">
                        <a href="https://www.linkedin.com/in/anmol-gupta-5bab4718b/"><img src={linkedin} alt="box with In for linked in logo" ></img></a>
                    </div>
                    <div className="git-div">
                       <a href="https://github.com/anmolgupta313"> <img src={github} alt="icon for github"></img></a>
                    </div>
                    <div className="inta-div">
                       <a href="https://www.instagram.com/anmolgupta313/"><img src={instagram} alt="square with rings representing a camera icon"></img></a> 
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="right-div">
                <p>Ⓒ 2024 All rights reserved | Developed & Designed By Anmol Gupta</p>
            </div>
        </div>
    )
}
export default Footer;