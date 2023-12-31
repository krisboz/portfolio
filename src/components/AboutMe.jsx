import React from "react";
import "../styles/AboutMe.scss";
import { IoHandLeftSharp as Hand } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import getIcon from "./../helpers/getIcon";

const AboutMe = ({ scrollTop }) => {
  const skills = [
    "react",
    "html",
    "javascript",

    "css",
    "firebase",
    "redux",
    "sass",
    "git",
    "zustand",
    "github",
  ];
  const icons = getIcon(skills);
  return (
    <div className="about-me">
      <section className="about-me-description">
        <h1>
          Hello <Hand className="waving-hand" />
        </h1>
        <article className="about-me-text">
          <p>I'M A WEB DEVELOPER BASED IN GERMANY</p>
          <p>
            PASSIONATE ABOUT LIFELONG LEARNING, PICKING UP NEW TECHNOLOGIES AND
            SOLVING PROBLEMS
          </p>{" "}
          <p>WHEN I'M NOT CODING YOU CAN FIND ME GAMING, COOKING OR READING</p>
        </article>
      </section>
      <section className="my-skills">
        <div className="right-container">
          <h1>Skills</h1>
          <p>I AM COMFORTABLE IN USING THESE TECHNOLOGIES</p>
          <div className="skills-container">
            {icons.map((Icon, i) => {
              if (skills[i] === "react") {
                return (
                  <div className="react-icon" key={i}>
                    <div className="icon-container" key={i}>
                      <Icon
                        key={i}
                        style={{ transform: `rotate(${scrollTop / 2}deg)` }}
                        title={skills[i].toUpperCase()}
                      />
                      {skills[i].toUpperCase()}
                    </div>
                  </div>
                );
              } else
                return (
                  <div className="icon-container" key={i}>
                    <Icon key={i} title={skills[i].toUpperCase()} />{" "}
                    {skills[i].toUpperCase()}
                  </div>
                );
            })}
          </div>
          <p>AND I'M ALWAYS ON THE LOOKOUT FOR NEW ONES</p>
        </div>
      </section>
      <div className="project-intro">
        <h2>CHECK OUT MY PROJECTS</h2>

        <div className="arrows-container">
          <IoIosArrowDown /> <IoIosArrowDown /> <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
