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
                        My name is anmol gupta. I did my graduation in commerce from india. After completing my graduation I shifted my carrier to
                        website development and designing as I like to be more creative and this is something I enjoy doing. Since then I have been
                        working as a freelancer.</p>
                    <p class="aboutme-Summary"> I have worked as a website designer & developer with companies all over the world like Clickworthy
                        which is located in canada, Nomads Skillshare located in Bali, Blue Ocean business club located in Germany. I have helped
                        them in developing their front end , wireframes, smooth user experiecne and customer journey for which I have worked with their technical team
                        and project Manager.</p>
                    <p class="aboutme-Summary"> Recently I migrated to Canada and completed by graduation in full stack web developmemt from university of Toronto.
                        where I learned and enhanced my skills. While studying I worked on some projects with a team and we were able to build beautiful websites by using React framework
                        for the frontend and we also created our own data base using Mongoose or SQL.</p>
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
                        <p className="hobbies-title">Listening music</p>
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