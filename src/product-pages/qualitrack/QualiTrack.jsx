import { useState, useEffect } from "react";
import "./QualiTrack.scss";
import dashboard from "../../assets/qualitrack/Dashboard.png";
import logo from "../../assets/qualitrack/qt-logo.png";
import TheBefore from "./components/TheBefore";
import TheStack from "./components/TheStack";
import Features from "./components/Features";
import ExpandableImage from "../../components/hocs/ExpandableImage";
import WhatILearned from "./components/WhatILearned";
import QTFooter from "./components/QTFooter";

const PAIN_POINTS = [
  {
    title: "Fragmented",
    description: [
      "All of the resources were split amongst many Excel and Word files",
    ],
  },
  {
    title: "Manual",
    description: [
      "All kinds of printed reports were generated manually",
      " A lot of calculations were done manually by looking up the necessary data",
      " Having reserved items meant physically writing the data on the labels",
    ],
  },
  {
    title: "Cumbersome",
    description: [
      "Manually writing reports could take anywhere from an hour, to 3 days for the big monthly reports",
      "Even reporting a single defective item would mean at least 5 minutes of work split amongst 3 Excel tables",
    ],
  },
];

const QualiTrack = ({ windowScrollTop }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width <= 768;

  return (
    <div className="qualitrack product-page">
      <div className="title">
        <img src={logo}></img>
        <h2>Internal QC Dashboard for High-End Jewelry</h2>
      </div>

      {isMobile ? (
        <div className="the-before">
          <div className="inner">
            <h3>Before QualiTrack the workflow was:</h3>
            <div className="pain-point">
              <p className="fragmented pp-name">
                {" "}
                <span className="span-1">Fragm</span>{" "}
                <span className="span-2">ented</span>
              </p>

              <div className="pp-description">
                <p>
                  All of the resources were split amongst many Excel and Word
                  files
                </p>
              </div>
            </div>
            <div className="pain-point">
              <p className="pp-name">Mostly Manual</p>

              <div className="pp-description">
                <p>All kinds of printed reports were generated manually</p>
                <p>
                  A lot of calculations were done manually by looking up the
                  necessary data
                </p>
                <p>
                  Having reserved items meant physically writing the data on the
                  labels
                </p>
              </div>
            </div>

            <div className="pain-point">
              <p className="pp-name">Extremely Cumbersome</p>

              <div className="pp-description">
                <p>
                  Manually writing reports could take anywhere from an hour, to
                  3 days for the big monthly reports
                </p>
                <p>
                  Even reporting a single defective item would mean at least 5
                  minutes of work split amongst 3 Excel tables
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <TheBefore painPoints={PAIN_POINTS} />
      )}

      <div className="intro">
        <div className="description">
          <p>
            I built an internal tool to centralize a workflow that was
            previously scattered across outdated ERP systems, messy Excel
            sheets, and manual Word docs. It’s been in a stable version for 6
            months and is used daily by a team of 6.
          </p>
        </div>
        <div className="screenshot">
          <ExpandableImage img={dashboard} />
        </div>
      </div>
      <TheStack />
      <Features />
      <WhatILearned />
      <QTFooter />
    </div>
  );
};

export default QualiTrack;
