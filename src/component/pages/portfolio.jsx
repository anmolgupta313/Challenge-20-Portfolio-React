import React from "react";
import workoutmaker from "../../Assets/Images/workoutmaker.png"
import github from "../../Assets/Images/github.png"
import web from "../../Assets/Images/web.png"
import notemaker from"../../Assets/Images/notemaker.png"
import custompcbuild from"../../Assets/Images/cutompcbuild.png"
import weatherdashboard from"../../Assets/Images/weatherdashboard.png"
import quizchallenge from "../../Assets/Images/quizchallenge.png"
import workdayscheduler from "../../Assets/Images/workdayscheduler.png"
import project3 from "../../Assets/Images/project3.png"


function Portfolio() {
    const portfolio = [{
        "image": project3,
        "title": "Anime Bootcamp",
        "github": {"icon":github,
            "link":"https://github.com/renfunny/anime-bootcamp"},
        "deployedLink": {"icon":web,
            "link":"https://anime-bootcamp.herokuapp.com/"}
    },{
        "image": workoutmaker,
        "title": "Workout Maker",
        "github": {"icon":github,
            "link":"https://github.com/renfunny/GitUp.Now"},
        "deployedLink": {"icon":web,
            "link":"https://renfunny.github.io/GitUp.Now/index.html"}
    },
    {
        "image": custompcbuild,
        "title": "Custom Pc Build",
        "github": {"icon":github,
        "link":"https://github.com/DustinLee0/Project-2-Custom-PC-Build"},
    "deployedLink": {"icon":web,
        "link":"https://custom-pc.herokuapp.com/"}
    },
    {
        "image": notemaker,
        "title": "Note Maker",
        "github": {"icon":github,
            "link":"https://github.com/anmolgupta313/Note-Maker-Challenge-11/issues/new"},
        "deployedLink": {"icon":web,
            "link":"https://notemakerchallenge.herokuapp.com/"}
    },
    {
        "image": weatherdashboard,
        "title": "Weather Dashboard",
        "github": {"icon":github,
            "link":"https://github.com/anmolgupta313/Weather-Dashboard-Challenge-06"},
        "deployedLink": {"icon":web,
            "link":"https://anmolgupta313.github.io/Weather-Dashboard-Challenge-06/"}
    },
    {
        "image": quizchallenge,
        "title": "Quiz Challenge",
        "github": {"icon":github,
            "link":"https://github.com/anmolgupta313/Web-ApI-Quiz-Chaallenge"},
        "deployedLink": {"icon":web,
            "link":"https://anmolgupta313.github.io/Web-ApI-Quiz-Chaallenge/"}
    },
    {
        "image": workdayscheduler,
        "title": "Work Day Scheduler",
        "github": {"icon":github,
        "link":"https://anmolgupta313.github.io/Challenge-5-Work-Day-Scheduler/"},
    "deployedLink": {"icon":web,
        "link":"https://github.com/anmolgupta313/Challenge-5-Work-Day-Scheduler"}
    }]


    const pop = portfolio.map(activity => {
        console.log(activity.deployedLink)
        return (<div className="card-div">
            <div className="img-portfolio">
                <img src={activity.image} alt="project-img"></img>
            </div>
            <div className="content-div">
                <div className="title">
                    <h3>{activity.title}</h3>
                </div>
                <div className="links">
                    <div>
                        <a href={activity.github.link}><img className="iconss" src={activity.github.icon}></img></a>
                    </div>
                    <div>
                        <a href={activity.deployedLink.link}><img className="iconss"src={activity.deployedLink.icon}></img></a>
                    </div>
                </div>
            </div>

        </div>)
    })


    return (
        <div className="portfolio-main-div">
            <div className="portfolio-heading-div">
                <h1>MY  <mark className="mark">PORTFOLIO</mark></h1>
            </div>
            <div className="cards-main-div">
                {pop}
            </div>
        </div>
    )
}

export default Portfolio;