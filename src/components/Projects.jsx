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
      "CONFESSIT IS A SOCIAL MEDIA APP THAT ALLOWS USERS TO SHARE THEIR CONFESSIONS, JUDGE AND COMMENT OTHER CONFESSIONS.THE APP USES REACT FOR THE FRONTEND AND FIREBASE AS THE BACKEND SERVICE.",
    technologies: ["react", "firebase", "sass", "zustand"],
    link: "https://confessit-9ba45.web.app/",
  };

  const lotto = {
    name: "Lotto",
    description:
      "FRONTED APP MADE TO BE LIKE EUROJACKPOT, USERS CAN CHOOSE TICKETS, PLAY, SEE HOW MUCH MONEY THEY MAKE OR LOSE AND SEE RESULTS FOR 250.000 SIMULATED PLAYERS PER TURN.",
    technologies: ["react", "css", "redux"],
    link: "https://krisboz.github.io/react-lottery-simulator/",
  };

  const restaurant = {
    name: "Pizzeria",
    description:
      "FULLY RESPONSIVE FRONTEND FAKE PIZZERIA APP WITH A FUNCTIONING SHOPPING CART. CART WAS IMPLEMENTED WITH A CENTRALIZED STATE VIA CONTEXT API AND REDUCER FUNCTIONS",
    technologies: ["react", "sass"],
    link: "https://krisboz.github.io/react-restaurant",
  };

  return (
    <section className="projects">
      <div>
        <Project projectObj={confessit} scrollTop={scrollTop} />
        <Project projectObj={lotto} scrollTop={scrollTop} />
        <Project projectObj={restaurant} scrollTop={scrollTop} />
      </div>
    </section>
  );
};

export default Projects;
