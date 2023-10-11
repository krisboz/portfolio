// Icon.js
import { useState } from "react";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoFirebase,
  BiLogoRedux,
  BiLogoSass,
} from "react-icons/bi";

import "../styles/Icon.scss";

const skills = {
  HTML: { logo: <BiLogoHtml5 />, info: null },
  CSS: { logo: <BiLogoCss3 />, info: null },
  Sass: {
    logo: <BiLogoSass />,
    info: ["Nesting", "Partials", "Modules", "Mixins", "Variables"],
  },
  JS: {
    logo: <BiLogoJavascript />,
    info: ["Promises", "Async/Await", "API Interaction"],
  },
  React: {
    logo: <BiLogoReact />,
    info: [
      "React Router",
      "Hooks (such as useState, useEffect, useMemo, useContext)",
    ],
  },
  Firebase: {
    logo: <BiLogoFirebase />,
    info: ["Firestore", "Authentication", "Hosting", "Storage"],
  },
  Redux: { logo: <BiLogoRedux />, info: null },
};

const Icon = ({ name }) => {
  const [expanded, setExpanded] = useState(false);
  const skillObject = skills[name];

  const handleIconExpand = () => {
    if (skillObject.info === null) {
      return null;
    }
    if (!expanded) {
      setExpanded(true);
    } else if (expanded) {
      setExpanded(false);
    }
  };

  const renderIconExpanded = () => {
    if (
      skillObject.info !== null &&
      skillObject.info.length > 0 &&
      skillObject.info !== undefined
    ) {
      return (
        <div
          className="expanded-skill"
          onClick={() => {
            setExpanded(false);
          }}
        >
          <div
            className="icon-container"
            tabIndex={0}
            onClick={() => setExpanded(false)}
          >
            {skillObject.logo}
          </div>
          <div className="info">
            {skillObject.info.map((point, i) => {
              return <li key={i}>{point}</li>;
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <section
      className={`skill ${expanded ? "expanded-skill" : ""}`}
      aria-expanded={expanded}
    >
      {!expanded && (
        <button
          onClick={handleIconExpand}
          aria-label={`Toggle ${name} skill info`}
        >
          {skillObject.logo}
          <p>{name}</p>
        </button>
      )}
      {expanded && (
        <div className="info" onClick={() => setExpanded(false)}>
          {skillObject.info && (
            <>
              <div>
                {name}
                {skillObject.logo}
              </div>
              <ul>
                {skillObject.info.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Icon;
