import { useState } from "react";
import monthly1 from "../../../assets/qualitrack/monthly-2x.png";
import monthly2 from "../../../assets/qualitrack/monthly-2-2x.png";
import monthly3 from "../../../assets/qualitrack/monthly-3-2x.png";
import "../styles/MonthlyReportCards.scss";
import ExpandableImage from "./../../../components/hocs/ExpandableImage";

const MonthlyReportCards = () => {
  const [hovered, setHovered] = useState(false);
  const WIDTH = window.innerWidth <= 768 ? "120px" : "200px";
  return (
    <div
      className="report-cards-wrapper"
      onMouseEnter={(e) => setHovered(true)}
      onMouseLeave={(e) => setHovered(false)}
    >
      <div className={`monthly-report-cards ${hovered ? "hovered" : ""}`}>
        <ExpandableImage img={monthly1} width={WIDTH} className="report-1" />
        <ExpandableImage img={monthly2} width={WIDTH} className="report-2" />
        <ExpandableImage img={monthly3} width={WIDTH} className="report-3" />
      </div>
    </div>
  );
};

export default MonthlyReportCards;
