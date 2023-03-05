import React from "react";

import resume from "../../Assets/Images/Anmolresume.pdf"

function Resume() {
    return (
        <div className="resume-main-div">
            <div className="downlaod-div">
                <h1>Download <mark className="mark">RESUME</mark></h1>
                <a href={resume}download><button>Download</button></a>
            </div>
            <div className="skills-div">
                <div id="frontend-div" className="skill-div">
                    <h2>Front End Skills</h2>
                    <ul>
                        <li>React</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>HTML</li>
                        <li>version control/Git</li>
                        <li>responsive design</li>
                    </ul>

                </div>
                <div id="backend-div" className="skill-div">
                <h2>Back End Skills</h2>
                    <ul>
                    <li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
                    </ul>
                </div>
                <div id="database-div" className="skill-div">
                <h2>Database Skills</h2>
                    <ul>
                    <li>MySQL</li>
					<li>Sequelize</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Resume;