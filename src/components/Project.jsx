import React from "react";
import getIcon from "../helpers/getIcon";
import "../styles/Project.scss";
import getImages from "./../helpers/getImages";
import { MdOutlineOpenInNew as NewTabIcon } from "react-icons/md";

const Project = ({ projectObj, scrollTop, swingVal }) => {
  const photos = getImages(projectObj.name);
  //name, description, photos, technologies

  function calculateBounceValue(scrollPixels) {
    // Calculate the period of the sine wave (adjust as needed)
    const period = 1000; // You can adjust this value to control the speed of the bounce
    // Calculate the amplitude (half of the range between +10 and -10)
    const amplitude = 10;

    // Calculate the angle based on the scroll position and period
    const angle = ((scrollPixels % period) * (2 * Math.PI)) / period;

    // Calculate the sine of the angle and scale it to the amplitude
    const bounceValue = Math.sin(angle) * amplitude;

    return bounceValue;
  }

  return (
    <section className="new-project">
      <div className="details">
        <h2 className="project-name">{projectObj.name}</h2>
        <p className="technologies">
          {getIcon(projectObj.technologies).map((Icon, index) => {
            return (
              <span
                title={projectObj.technologies[index].toUpperCase()}
                key={index}
              >
                {<Icon />}
              </span>
            );
          })}
        </p>
        <p className="project-description">{projectObj.description}</p>
        <div className="project-button-container">
          <a href={projectObj.link} target="_blank">
            Visit <NewTabIcon />
          </a>
        </div>
      </div>
      <div className="preview">
        <div
          className="mobile"
          style={{
            transform: `rotate(${
              swingVal
                ? calculateBounceValue(scrollTop) * -1
                : calculateBounceValue(scrollTop)
            }deg)`,
          }}
        >
          <img src={photos.mobile}></img>
        </div>
        <div
          className="desktop"
          style={{ backgroundImage: `url(${photos.desktop})` }}
        ></div>
      </div>
    </section>
  );
};

export default Project;
