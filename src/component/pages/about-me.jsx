import React from "react";
import avatar from '../../Assets/Images/avatar.svg'

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
                        website designign and developement as i like to be more creative and this is something I enjoy doing. Since then I have been
                        working as a freelancer. I have worked as a website designer & developer with companies all over the world like Clickworthy
                        which is located in canada, Nomads Skillshare located in Bali, Blue Ocean business club located in Germany. I have helped
                        them in developing wireframes, smooth user experiecne and customer journey for which I have worked with their technical team
                        and project Manager. while doing freelancing I got some certifications like responsive website designing and developement,
                        Google ads, crash course python and more. Recently I migrated to Canada and I have been looking for oppotunities so I started
                        looking linked In where I found a position of UI/UX is opened in your company and then I applied for this role</p>
                </div>
            </div>
        </div>

    )
}

export default About