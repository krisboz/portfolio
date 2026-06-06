import { useState, useEffect, useRef } from "react";
import "../styles/TheStack.scss";
import getIcon from "../../../helpers/getIcon";

const TheStack = () => {
  const [windowScrollTop, setWindowScrollTop] = useState(0);
  const [sqliteDisplayOn, setSqliteDisplayOn] = useState(false);
  const [followerClass, setFollowerClass] = useState("follower");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const followerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.pageX,
        y: e.pageY,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId;
    const updateFollower = () => {
      if (followerRef.current) {
        followerRef.current.style.left = `${mousePos.current.x}px`;
        followerRef.current.style.top = `${mousePos.current.y}px`;
      }

      animationFrameId = requestAnimationFrame(updateFollower);
    };
    updateFollower();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScroll = () => {
    setWindowScrollTop(window.scrollY);
  };

  const handleMouseEnter = (e) => {
    setSqliteDisplayOn(true);

    setFollowerClass("follower");
  };

  const handleMouseLeave = (e) => {
    setFollowerClass("follower vanishing");
    setTimeout(() => {
      setSqliteDisplayOn(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const STACK = ["React", "Sass", "Node", "Express", "SQLite"];
  const newStack = STACK.map((tech) => tech.toLowerCase());
  const rotationSpeed = windowScrollTop / 4;

  const icons = getIcon(newStack);

  return (
    <div className="stack-container">
      <h3>Built with:</h3>

      <div className="icons-container">
        {icons.map((Icon, i) => {
          if (newStack[i] === "react") {
            return (
              <div className="icon-container" key={i}>
                <Icon
                  key={i}
                  style={{
                    transform: `rotate(${rotationSpeed}deg)`,
                    transition: "none",
                  }}
                  title={newStack[i].toUpperCase()}
                />
                <p>{newStack[i].toUpperCase()}</p>
              </div>
            );

            {
              /*****************SQLITE ICON************************************************************* */
            }
          } else if (newStack[i] === "sqlite") {
            return (
              <div className="icon-container sqlite" key={i}>
                <div
                  className="sqlite-inner"
                  onMouseOver={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Icon key={i} title={newStack[i].toUpperCase()} />
                  <p>{newStack[i].toUpperCase()}</p>
                </div>

                {sqliteDisplayOn ? (
                  <div className={followerClass} ref={followerRef}>
                    <p>SQLite was a deliberate choice for this project.</p>
                    <p>
                      The database is relatively speaking very small{" "}
                      {"<100,000 rows"}
                    </p>
                    <p>The data income rate is rather low</p>
                    <p>
                      It was just nice for me as a sole developer, having it all
                      nicely contained in one file
                    </p>
                  </div>
                ) : null}
              </div>
            );
            {
              /**************SQLITE ICON END******************************************************************************** */
            }
          } else {
            return (
              <div className="icon-container" key={i}>
                <Icon key={i} title={newStack[i].toUpperCase()} />{" "}
                <p>{newStack[i].toUpperCase()}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TheStack;
