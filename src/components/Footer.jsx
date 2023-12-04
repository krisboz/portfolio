import React from "react";
import "../styles/Footer.scss";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";

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

          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/kristijan-bozinovic-761b8a1b0/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="right-side">
        <div className="interests">
          <h2>My interests include among other things:</h2>
          <a
            title="Send me an e-mail :)"
            href="mailto:kristijan.bozinovic1@gmail.com?subject=%20I%20am%20looking%20for%20a%20Developer.%20Let's%20talk"
          >
            <span>REACT DEVELOPMENT</span>
          </a>
          <a
            title="Send me an e-mail :)"
            href="mailto:kristijan.bozinovic1@gmail.com?subject=%20I%20am%20looking%20for%20a%20Developer.%20Let's%20talk"
          >
            <span>FRONTEND DEVELOPMENT</span>
          </a>
          <a
            title="Send me an e-mail :)"
            href="mailto:kristijan.bozinovic1@gmail.com?subject=%20I%20am%20looking%20for%20a%20Developer.%20Let's%20talk"
          >
            <span>LEARNING AND GROWTH</span>
          </a>
          <a
            title="Send me an e-mail :)"
            href="mailto:kristijan.bozinovic1@gmail.com?subject=%20I%20am%20looking%20for%20a%20Developer.%20Let's%20talk"
          >
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
