import React from "react";
import avatar from '../../Assets/Images/avatar.svg'
import photography from '../../Assets/Images/photography.png'
import cricket from '../../Assets/Images/cricket.png'
import trekking from '../../Assets/Images/trekking.png'
import music from '../../Assets/Images/music.png'

function About() {
    return (
        <div className="about-main-div">
            <div>
                <h1>About Page</h1>
            </div>
            <div className="about-div">
                <div className="avatar-div">
                    <img src={avatar} alt="" />
                </div>
                <div className="intro-div">
                    <h2>My <mark className="mark">Intro</mark></h2>
                    <p class="aboutme-Summary">
                        My name is Anmol Gupta. I am a commerce graduate and I have always been passionate about creating and designing things from scratch. 
                        Taking this passion forward, I decided to learn web designing and development and started working as a freelancer in 2020. </p>
                        
                    <p class="aboutme-Summary"> I have worked as a website designer & developer with companies all over the world like Clickworthy,
                     Canada; Nomads Skillshare, Bali and Blue Ocean business club, Germany. I worked with their technical teams and 
                        project managers to understand their customer journeys and developed wireframes and front end websites to provide them with smooth user experience. 
                        These websites helped to increase footfall and revenue for these companies.
                    </p>
                    <p class="aboutme-Summary"> I migrated to Canada in 2022 and completed by graduation in full stack web development from University of Toronto,
                        where I learned new coding languages and enhanced my web development skills. While studying, I worked on various assignments and team projects for building
                         customer centric websites using different frameworks and languages such as React, Java Script, CSS for the frontend and created MongoDB and MySQL data bases using Mongoose and SQL libraries .</p>
                    <p class="aboutme-Summary">  I look forward to using my skillsets and experience and helping you with your web development needs.</p>
                </div>
            </div>
            <div className="hobbies-main-div">
                <h3>My <mark className="mark">Hobbies</mark> </h3>
                <div className="hobbies-card-main">
                    <div className="hobbies-card">
                        <div>
                            <p className="hobbies-title">Photography</p>
                        </div>
                        <div>
                        <img src={photography} alt="camera"></img>
                        </div>

                    </div>
                    <div className="hobbies-card">
                        <div>
                        <p className="hobbies-title">Cricket</p>
                        </div>
                        <div>
                        <img src={cricket} alt="cricket"></img>
                        </div>
                    </div>
                    <div className="hobbies-card">
                        <div>
                        <p className="hobbies-title">Listening to music</p>
                        </div>
                        <div>
                        <img src={music} alt="headphones on head"></img>
                        </div>
                    </div>
                    <div className="hobbies-card">
                        <div>
                        <p className="hobbies-title">Trekking</p>
                        </div>
                        <div>
                        <img src={trekking} alt="person with trekking stick and bag"></img>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default About