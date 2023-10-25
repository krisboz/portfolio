import { useState, useEffect, useRef } from "react";
import backgroundz from "../assets/background6.jpg";
import "../styles/Main.scss";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoFirebase,
  BiLogoRedux,
} from "react-icons/bi";
import Projects from "./Projects";

import AboutMe from "./AboutMe";
//I am a self taught developer that specializes in react,
//my free time specialization is pizza

const Main = ({ scrollTop }) => {
  const imageRef = useRef(null);

  const [expanded, setExpanded] = useState(false);

  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const img = imageRef.current.getBoundingClientRect();
    const res = img.height + img.top;

    setExpanded(window.scrollY > 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * after .hero goes name, all the other content like. name
   * .projects, .skills whatever
   *
   * img tag is the bg-img, .plane has the clipPath
   */
  return (
    <main>
      <div className="hero" style={{ opacity: ` ${opacity} ` }}>
        <div className="main-bg">
          <div className={expanded ? "plane expanded" : "plane"}>
            <picture>
              <img
                src={backgroundz}
                alt="photo"
                ref={imageRef}
                loading="lazy"
                style={{
                  transform: `translate3d(-0.2px, -${
                    expanded && scrollTop / 2
                  }px, 0px`,
                }}
              ></img>
            </picture>
          </div>
        </div>

        <div className={expanded ? "hero-main expanded" : "hero-main"}>
          <div className="name">
            <h3>
              Kristijan <br /> Božinović
            </h3>
          </div>
          <div className="content">
            <h3>
              Web <br /> Developer
            </h3>
          </div>
        </div>
      </div>
      {expanded && (
        <>
          <AboutMe scrollTop={scrollTop} />

          <Projects scrollTop={scrollTop} />
        </>
      )}
    </main>
  );
};

export default Main;
