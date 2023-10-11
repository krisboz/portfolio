import React from "react";
import "../styles/Footer.scss";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="contact">
      <div className="left-side">
        <h2>LET'S CONNECT</h2>
        <div className="links">
          <a title="Github" href="https://github.com/krisboz" target="_blank">
            <AiFillGithub />
          </a>

          <a
            title="Gmail"
            href="mailto:kristijan.bozinovic1@gmail.com?subject=%20I%20am%20looking%20for%20a%20Developer.%20Let's%20talk"
          >
            <span>
              <BiLogoGmail />
            </span>
          </a>
        </div>
      </div>

      <div className="right-side">
        <div className="interests">
          <h2>My interests include among other things:</h2>
          <a href="mailto:kristijan.bozinovic1@gmail.com?subject=%20I%20am%20looking%20for%20a%20Developer.%20Let's%20talk">
            <span>REACT DEVELOPMENT</span>
          </a>
          <a href="mailto:kristijan.bozinovic1@gmail.com?subject=%20I%20am%20looking%20for%20a%20Developer.%20Let's%20talk">
            <span>FRONTEND DEVELOPMENT</span>
          </a>
          <a href="mailto:kristijan.bozinovic1@gmail.com?subject=%20I%20am%20looking%20for%20a%20Developer.%20Let's%20talk">
            <span>UX/UI DESIGN</span>
          </a>
          <a href="mailto:kristijan.bozinovic1@gmail.com?subject=%20I%20am%20looking%20for%20a%20Developer.%20Let's%20talk">
            <span>GETTING A JOB</span>
          </a>
        </div>
      </div>
    </footer>
  );

  /**
   * footer
   *  middle part
   *    lets connect   interests
   * bottom links
   * github, e-mail
   */
};

export default Footer;
