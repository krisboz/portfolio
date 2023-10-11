import "../styles/Projects.scss";
import Project from "./Project";
import {
  BiLogoHtml5 as html,
  BiLogoCss3 as Css,
  BiLogoJavascript as Javascript,
  BiLogoReact as React,
  BiLogoFirebase as Firebase,
  BiLogoRedux as Redux,
} from "react-icons/bi";

const Projects = ({ scrollTop }) => {
  const confessit = {
    name: "confessit",
    description:
      "Confessit is a social media app that allows users to share their confessions, judge and comment other confessions anonymously.The app uses React for the frontend and Firebase as the backend service.",
    technologies: ["react", "firebase", "sass"],
    link: "https://confessit-9ba45.web.app/",
  };

  const lotto = {
    name: "Lotto",
    description:
      "Fronted app made to be like Eurojackpot, users can choose tickets, play, see how much money they make or lose and see results for 250.000 simulated players per turn.",
    technologies: ["react", "css", "redux"],
    link: "https://krisboz.github.io/react-lottery-simulator/",
  };

  const restaurant = {
    name: "Pizzeria",
    description:
      "Fully responsive frontend fake pizzeria app with a functioning shopping cart. Cart was implemented with a centralized state via Context API and reducer functions",
    technologies: ["react", "sass"],
    link: "https://krisboz.github.io/react-restaurant",
  };

  return (
    <section className="projects">
      <div>
        {" "}
        <h1>Projects</h1>
        <Project projectObj={confessit} scrollTop={scrollTop} />
        <Project projectObj={lotto} scrollTop={scrollTop} />
        <Project projectObj={restaurant} scrollTop={scrollTop} />
      </div>
    </section>
  );
};

export default Projects;
