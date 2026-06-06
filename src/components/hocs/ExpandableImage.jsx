import { useState, useEffect } from "react";
import "./styles/ExpandableImage.scss";
import { createPortal } from "react-dom";

const ExpandableImage = ({ img, width = "100%", className = "" }) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setExpanded(false);
    };

    if (expanded) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expanded]);

  // const computedWidth = isMobile ? "100%" : width;

  return (
    <div className={`expandable-image ${className}`}>
      <img
        src={img}
        style={{ width: width }}
        onClick={toggleExpanded}
        alt="thumbnail"
      />

      {expanded &&
        createPortal(
          <div className="image-overlay" onClick={() => setExpanded(false)}>
            <button
              className="close-btn"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded(false);
              }}
            >
              &times;
            </button>

            <img
              src={img}
              className="full-img"
              onClick={(e) => e.stopPropagation()}
              alt="expanded"
            />
          </div>,
          document.body,
        )}
    </div>
  );
};

export default ExpandableImage;
