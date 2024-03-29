import React from "react";
import workoutmaker from "../../Assets/Images/workoutmaker.png";
import github from "../../Assets/Images/github.png";
import web from "../../Assets/Images/web.png";
import notemaker from "../../Assets/Images/notemaker.png";
import custompcbuild from "../../Assets/Images/cutompcbuild.png";
import weatherdashboard from "../../Assets/Images/weatherdashboard.png";
import quizchallenge from "../../Assets/Images/quizchallenge.png";
import workdayscheduler from "../../Assets/Images/workdayscheduler.png";
import project3 from "../../Assets/Images/project3.png";
import airBnb from "../../Assets/Images/airbnb.png";
import Akicks from "../../Assets/Images/akicks.png";
import Translate from "../../Assets/Images/translate.png";

function Portfolio() {
  const portfolio = [
    {
      image: airBnb,
      title: "Air Bnb Home Rep",
      description:
        "This project represents the culmination of my efforts following the completion of my Bootcamp course at the University of Toronto. It involves the creation of a web page that closely mirrors the Airbnb homepage.",
      github: {
        icon: github,
        link: "https://github.com/anmolgupta313/Bnb-Home-rep",
      },
      deployedLink: { icon: web, link: "https://bnb-home-rep.vercel.app/" },
    },
    {
      image: Akicks,
      title: "A-kicks",
      description:" AKicks  is an e-commerce platform tailored for sneaker enthusiasts. Users can explore a diverse range of sneakers categorized by brand, name, and value. The platform enables users to place orders for their preferred sneaker in their specific sizes by adding into cart and creating an account.",
      github: {
        icon: github,
        link: "https://github.com/anmolgupta313/A-Kicks-",
      },
      deployedLink: {
        icon: web,
        link: "https://github.com/anmolgupta313/A-Kicks-",
      },
    },
    {
      image: project3,
      title: "Anime Bootcamp",
      description:"Anime Database is an online database for anime and manga, where users can search, read story briefs and sign up to create their watchlists & read lists.",
      github: {
        icon: github,
        link: "https://github.com/renfunny/anime-bootcamp",
      },
      deployedLink: {
        icon: web,
        link: "https://anime-bootcamp.herokuapp.com/",
      },
    },
    {
      image: Translate,
      title: "Lets Translate",
      description:"Lets Translate is a website for translating language into their native language using speech to text",
      github: {
        icon: github,
        link: "https://github.com/anmolgupta313/TranslateApp",
      },
      deployedLink: {
        icon: web,
        link: "https://translate-app-snowy.vercel.app/",
      },
    },
    {
      image: workoutmaker,
      title: "Workout Maker",
      description:"Workout Builder is a website for beginners and workout enthusiasts to learn about exercise options based on different muscle groups and the right methods to perform these exercises.",
      github: { icon: github, link: "https://github.com/renfunny/GitUp.Now" },
      deployedLink: {
        icon: web,
        link: "https://renfunny.github.io/GitUp.Now/index.html",
      },
    },
    // {
    //   image: custompcbuild,
    //   title: "Custom Pc Build",
    //   description:"Custom PC Builder is a website that can be used to build dream custom PCs where users can log in or sign up to obtain knowledge on various parts and their prices. It also provides users with pre-built options to select and compare against.",
    //   github: {
    //     icon: github,
    //     link: "https://github.com/DustinLee0/Project-2-Custom-PC-Build",
    //   },
    //   deployedLink: { icon: web, link: "https://custom-pc.herokuapp.com/" },
    // },
    // {
    //   image: notemaker,
    //   title: "Note Maker",
    //   description:"",
    //   github: {
    //     icon: github,
    //     link: "https://github.com/anmolgupta313/Note-Maker-Challenge-11",
    //   },
    //   deployedLink: {
    //     icon: web,
    //     link: "https://notemakerchallenge.herokuapp.com/",
    //   },
    // },
    {
      image: weatherdashboard,
      title: "Weather Dashboard",
      description:"Weathether Dashboard is a website where user can search and have a look on the weather forecast of any city for the next 5 days and can switch between cities after searching for multiple cities. ",
      github: {
        icon: github,
        link: "https://github.com/anmolgupta313/Weather-Dashboard-Challenge-06",
      },
      deployedLink: {
        icon: web,
        link: "https://anmolgupta313.github.io/Weather-Dashboard-Challenge-06/",
      },
    },
    {
      image: quizchallenge,
      title: "Quiz Challenge",
      description:"Quiz Challenge is a game for the IT nerds where user can test their knowledge by answering few multiple choice questions and then save the score and can play again to beat their previous score",
      github: {
        icon: github,
        link: "https://github.com/anmolgupta313/Web-ApI-Quiz-Chaallenge",
      },
      deployedLink: {
        icon: web,
        link: "https://anmolgupta313.github.io/Web-ApI-Quiz-Chaallenge/",
      },
    },
    {
      image: workdayscheduler,
      title: "Work Day Scheduler",
      description:"Work Day Scheduler is a simple calendar where user can set their daily task based on the time and mark it done when they are done working on it",
      github: {
        icon: github,
        link: "https://github.com/anmolgupta313/Challenge-5-Work-Day-Scheduler",
      },
      deployedLink: {
        icon: web,
        link: "https://anmolgupta313.github.io/Challenge-5-Work-Day-Scheduler/",
      },
    },
  ];

  const pop = portfolio.map((activity) => {
    // console.log(activity.deployedLink)
    return (
      <div className="card-div">
        <div className="img-portfolio">
          <img src={activity.image} alt="project-img"></img>
        </div>
        <div className="content-div">
          <div className="title">
            <h3>{activity.title}</h3>
          </div>
          <div className="description">
            <p>{activity.description}</p>
          </div>
          <div className="links">
            <div>
              <a href={activity.github.link}>
                <img
                  className="iconss"
                  src={activity.github.icon}
                  alt="cat icon"
                ></img>
              </a>
            </div>
            <div>
              <a href={activity.deployedLink.link}>
                <img
                  className="iconss"
                  src={activity.deployedLink.icon}
                  alt="web icon` "
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="portfolio-main-div">
      <div className="portfolio-heading-div">
        <h1>
          MY <mark className="mark">PORTFOLIO</mark>
        </h1>
      </div>
      <div className="cards-main-div">{pop}</div>
    </div>
  );
}

export default Portfolio;
