import { useState, useEffect } from "react";
import "../styles/TheBefore.scss";

const PPTitleRenderer = ({ title }) => {
  if (title === "Fragmented") {
    return (
      <p className={title.toLowerCase()}>
        {" "}
        <span className="span-1">Fragm</span>{" "}
        <span className="span-2">ented</span>
      </p>
    );
  }
  return <p className={title.toLowerCase()}> {title}</p>;
};

const TheBefore = ({ painPoints }) => {
  const [selectedPP, setSelectedPP] = useState(null);

  const handleMouseEnter = (e, pp) => {
    setSelectedPP(null);
    setSelectedPP(pp);
  };

  //Sets selected PP back to null removing rendered content and the active class
  const handleCellClick = (e, title) => {
    if (title === selectedPP.title) {
      setSelectedPP(null);
    } else return;
  };

  const renderDescription = () => {
    if (!selectedPP) {
      return <div className="description"></div>;
    }

    return (
      <div className="description" key={selectedPP.title}>
        {selectedPP.description.map((line, index) => (
          <p className="pp-p">{line}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="before-container">
      <div className="inner">
        <h3>Before QualiTrack the workflow was: </h3>

        <div className="pain-points-container">
          {painPoints.map((pp) => (
            <div
              className={`pp-container ${selectedPP && selectedPP.title === pp.title ? "active" : ""}`}
              onMouseEnter={(e) => handleMouseEnter(e, pp)}
              onClick={(e) => handleCellClick(e, pp.title)}
            >
              <PPTitleRenderer title={pp.title} />
            </div>
          ))}
        </div>
        {renderDescription()}
      </div>
    </div>
  );
};

export default TheBefore;
