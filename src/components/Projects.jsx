import "../styles/Projects.scss";
import Project from "./Project";

const projects = [
  {
    name: "AsteroidAtlas",
    description:
      "EXPLORE ASTEROIDS CLOSEST TO EARTH, FIND OUT VARIOUS INTERESTING INFORMATION",
    technologies: ["react", "sass", "zustand"],
    link: "https://krisboz.github.io/asteroid-atlas",
  },
  {
    name: "confessit",
    description:
      "CONFESSIT IS A SOCIAL MEDIA APP THAT ALLOWS USERS TO SHARE THEIR CONFESSIONS, JUDGE AND COMMENT OTHER CONFESSIONS.THE APP USES REACT FOR THE FRONTEND AND FIREBASE AS THE BACKEND SERVICE.",
    technologies: ["react", "firebase", "sass", "zustand"],
    link: "https://confessit-9ba45.web.app/",
  },

  {
    name: "Lotto",
    description:
      "FRONTED APP MADE TO BE LIKE EUROJACKPOT, USERS CAN CHOOSE TICKETS, PLAY, SEE HOW MUCH MONEY THEY MAKE OR LOSE AND SEE RESULTS FOR 250.000 SIMULATED PLAYERS PER TURN.",
    technologies: ["react", "css", "redux"],
    link: "https://krisboz.github.io/react-lottery-simulator/",
  },

  {
    name: "Pizzeria",
    description:
      "FULLY RESPONSIVE FRONTEND FAKE PIZZERIA APP WITH A FUNCTIONING SHOPPING CART. CART WAS IMPLEMENTED WITH A CENTRALIZED STATE VIA CONTEXT API AND REDUCER FUNCTIONS",
    technologies: ["react", "sass"],
    link: "https://krisboz.github.io/react-restaurant",
  },
];

const Projects = ({ scrollTop }) => {
  return (
    <section className="projects">
      <div>
        {projects.map((project, index) => (
          <Project
            projectObj={project}
            key={index}
            swingVal={index % 2 > 0}
            scrollTop={scrollTop}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
