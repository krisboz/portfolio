import { useState, useEffect, useRef } from "react";
import "../styles/Features.scss";
import labelGen from "../../../assets/qualitrack/label-generator.png";
import label1 from "../../../assets/qualitrack/label-1.png";
import label2 from "../../../assets/qualitrack/label-2.png";
import label3 from "../../../assets/qualitrack/label-3.png";
import ExpandableImage from "../../../components/hocs/ExpandableImage";
import geBreakdown from "../../../assets/qualitrack/we-breakdown.png";
import geLossRechner from "../../../assets/qualitrack/we-lossRechner.png";
import qcOrder from "../../../assets/qualitrack/order.png";
import qcOrders from "../../../assets/qualitrack/orders.png";
import qcItem from "../../../assets/qualitrack/order-item.png";
import defectInput from "../../../assets/qualitrack/defect-input.png";
import goldInput from "../../../assets/qualitrack/gold-input.png";
import diamondInput from "../../../assets/qualitrack/diamond-input.png";
import defectReport from "../../../assets/qualitrack/defect-report.png";
import report1stPage from "../../../assets/qualitrack/report-1st-page.png";
import probeReport from "../../../assets/qualitrack/probe-report.png";

import MonthlyReportCards from "./MonthlyReportCards";

import { GrNext } from "react-icons/gr";
import { AiOutlineGold as Gold } from "react-icons/ai";
import { PiEyedropperSampleFill as Probe } from "react-icons/pi";
import { LuSearchX as Defect, LuPackage as GEIcon } from "react-icons/lu";
import { FaGem as Diamond } from "react-icons/fa";
import { IoPrint as Print } from "react-icons/io5";

import { IoSearchOutline as QCIcon } from "react-icons/io5";
import { HiOutlineDocumentReport as ReportingIcon } from "react-icons/hi";
import { MdOutlineStickyNote2 as LabelIcon } from "react-icons/md";
import TheBefore from "./TheBefore";
const FEATURES = [
  {
    name: "Label Generation",
    content: <LabelGeneration />,
    icon: <LabelIcon />,
  },
  { name: "Goods Entry", content: <GoodsEntry />, icon: <GEIcon /> },
  { name: "Quality Control", content: <QualityControl />, icon: <QCIcon /> },
  { name: "Reporting", content: <Reporting />, icon: <ReportingIcon /> },
];

const Features = () => {
  //Label Generation, Goods Entry, Quality Control, Reporting
  const [selected, setSelected] = useState(0);

  const contentRef = useRef();

  useEffect(() => {
    contentRef.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [selected]);
  return (
    <div className="features-outer">
      <h3>Main Features</h3>

      <div className="features-inner">
        <div className="selector">
          {FEATURES.map((feature, index) => (
            <button
              key={feature.name}
              className={selected === index ? "active" : ""}
              onClick={() => setSelected(index)}
            >
              {feature.icon}
              <span className="selector-text">{feature.name}</span>
            </button>
          ))}
        </div>

        <div className="content-container" ref={contentRef}>
          {FEATURES[selected]?.content}
        </div>
      </div>
    </div>
  );
};

function LabelGeneration() {
  /**
   * Originally label printing had two big problems
   * Printing out a single label meant having to go into a different interface which took long
   *
   * Reserved items had to be looked up manually and the necessary data would be written by hand.
   *
   *
   * The generator allows whole orders to be printed, single items from the same window, manual addition
   * and three options, to add reservation data, to add a barcode or to add an internally defined signifier request by the team
   *
   * In addition, it automatically cross checks with the table of reservations and adds the data automatically.
   *
   * This was a QoL addition
   *
   *
   */
  return (
    <div className="content label-generation">
      <h4>Label Generation</h4>
      <div className="label-problems">
        <p>Originally label printing had two big problems:</p>
        <ul>
          <li>
            Printing out a single label meant having to go into a different
            interface which took long
          </li>
          <li>
            Reserved items had to be looked up manually and the necessary data
            would be written by hand.
          </li>
        </ul>
      </div>
      <p className="label-accented">
        The generator solves both problems and improves on the UX, it reduced
        the amount of clicks/actions threefold.
      </p>
      <p className="label-header-line">It can be accessed:</p>
      <div className="label-intro">
        <div className="label-inner">
          <ul>
            <p className="l-title">From the sidebar</p>
            <li>Clean slate</li>
            <li>Quick printing</li>
            <li>SKU auto-complete</li>
          </ul>

          <ul>
            <p>From an order</p>
            <li>Adds all items from the order</li>
            <li>Still allows for manual addition </li>
            <li>Fetches and auto-fills reservation data</li>
          </ul>

          <ul>
            <p>Each label has three additional options:</p>
            <li>Add a custom signifier requested by the team</li>
            <li>Manually add reservation data</li>
            <li>Print a label with a barcode</li>
          </ul>
        </div>
        <ExpandableImage img={labelGen} width={"60%"} />
      </div>

      <div className="label-accented">
        <p>
          Labels are generated with jsPDF, which helped me achieve a slight
          resolution boost on the printer.
        </p>
        <p>
          It meant the barcodes would be scannable and I wouldn't have to deal
          with ZPL :D
        </p>
      </div>
      <div className="labels">
        <div className="img-container">
          <img src={label1}></img>
          <p>Special signifier label</p>
        </div>
        <div className="img-container">
          <img src={label2}></img>
          <p>Reserved item label</p>
        </div>
        <div className="img-container">
          <img src={label3}></img>
          <p>Barcode label</p>
        </div>
      </div>
      <p className="label-accented">
        It is a very simple solution and it was exactly what the team needed.
      </p>
    </div>
  );
}

function GoodsEntry() {
  return (
    <div className="content goods-entry">
      <h4>Goods Entry</h4>

      <p>
        Goods entry was probably the most annoying part of the workflow. Most of
        it still had to happen in the ERP system, but getting the data ready for
        it took way too long.
      </p>

      <p className="ge-accent">There are two main features:</p>

      <div className="ge-tasks">
        <div className="ge-task">
          <h5>Loss calculator</h5>

          <p className="accented">
            Since we’re working with jewelry, items often come back with stones
            already set. You can’t remove them, so the weight has to be adjusted
            manually.
            <br></br>
            Before this, that meant looking up component weights and doing the
            math by hand for every item.
          </p>

          <div className="task-solution">
            <div>
              {" "}
              <p>The calculator takes over most of that:</p>
              <ul>
                <li>Looks up known component weights automatically</li>
                <li>Uses SKU-based rules for edge cases</li>
                <li>Lets you process multiple orders at once</li>
              </ul>
              <p style={{ marginTop: "1rem" }}>
                I also connected the scale via a serial COM port, so weights are
                captured automatically. In practice you just select an order and
                start weighing.
              </p>
            </div>

            <ExpandableImage img={geLossRechner} width={"80%"} />
          </div>

          <p className="accented centered">
            Depending on the size of the delivery, this brought the process down
            from ~20–50 minutes to something closer to 3–10.
          </p>
        </div>

        <div className="ge-task">
          <h5>Excel breakdowns</h5>

          <p className="accented">
            Supplier breakdowns came in different formats and currencies, so
            before doing anything you had to clean them up manually.
            <br></br>
            That meant looking up exchange rates, adjusting columns, and
            basically rewriting parts of the table every time.
          </p>

          <div className="task-solution">
            <div>
              <p>
                I built a simple converter where you just drop in the file and
                it:
              </p>
              <ul>
                <li>Applies the correct exchange rate</li>
                <li>Restructures the table</li>
                <li>Adds the fields needed for ERP input</li>
              </ul>
            </div>

            <ExpandableImage img={geBreakdown} width={"80%"} />
          </div>

          <p className="centered">
            What used to take a few minutes per file now just happens instantly.
          </p>
        </div>
      </div>

      <p>
        The goal here wasn’t to replace ERP input, just to get rid of all the
        prep work around it. That’s where most of the time was going anyway.
      </p>
    </div>
  );
}

function QualityControl() {
  //defect, gold, diamond, probe,    item print

  const [selected, setSelected] = useState("defective");

  const handleSetSelected = (choice) => {
    if (choice === selected) {
      setSelected(null);
      return;
    }
    setSelected(choice);
  };

  const descriptions = {
    defective: (
      <>
        <div className="item-button">
          <h5>Defect reporting</h5>

          <p className="before">
            Reporting defects used to involve total manual entry, using a couple
            of excel tables, cross checking with item data and so on.
          </p>

          <div className="now">
            <div className="list-photo">
              <div className="list-container">
                <p>
                  {" "}
                  Now it's a kind of a one-stop situation. <br /> <br />
                  Most fields are filled in, and a user just selects the reason
                  and the solution type (in-house or external) and any necessary
                  data is on the button titled "Item" which makes cross-checking
                  much easier.
                </p>
                <ul>
                  <li>Supports in-house and external handling</li>
                  <li>Tracks repair type and internal costs</li>
                  <li>Allows attaching images</li>
                  <li>Can generate a printable report if needed</li>
                </ul>
              </div>

              <ExpandableImage img={defectInput} width="400px" />
            </div>
          </div>
        </div>
      </>
    ),

    gold: (
      <>
        <div className="item-button">
          <h5>Gold testing</h5>
          <div className="before">
            <p>Gold tests were previously written down manually each month.</p>
          </div>
          <div className="now">
            <div className="list-photo">
              <div className="list-container">
                <p>
                  Now they’re directly tied to items. The system infers most of
                  the data from the SKU, so the user mainly just confirms the
                  result.
                </p>

                <ul>
                  <li>Autofills order, item and color values</li>
                  <li>Gets saved and used in monthly reports</li>
                  <li>
                    Allows quick and easy tracking of missing gold tests on the
                    homepage
                  </li>
                </ul>
              </div>

              <ExpandableImage img={goldInput} width="250px" />
            </div>
          </div>
        </div>
      </>
    ),

    diamond: (
      <>
        <div className="item-button">
          <h5>Diamond screening</h5>

          <div className="before">
            <p>
              The screening device isn’t connected to the network, so results
              had to be transferred manually and stored in multiple places.
            </p>
          </div>

          <div className="now">
            <div className="list-photo">
              <div className="list-container">
                <p>
                  QualiTrack lets you upload those files directly and keeps
                  everything tied to the item.
                </p>

                <ul>
                  <li>Simple input for standard results</li>
                  <li>Full file upload for detailed screenings</li>
                </ul>
              </div>
              <ExpandableImage img={diamondInput} width="350px" />
            </div>
          </div>
        </div>
      </>
    ),

    probe: (
      <>
        <div className="item-button">
          <h5>Random probe</h5>
          <div className="before">
            <p>
              The random probe workflow guides the user through a
              company-defined QC process step by step.
            </p>
            <p>
              Inputs and checks adapt depending on the item type, which keeps
              the workflow focused and avoids unnecessary fields.
            </p>
          </div>
          <div className="now">
            <div className="list-photo">
              <div className="list-container">
                <ul>
                  <li>Displays expected average weights</li>
                  <li>Shows minimum and maximum tolerances</li>
                  <li>Highlights acceptable ranges during weighing</li>
                  <li>Helps standardize the QC process across users</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ending-line">
            <p>
              The goal wasn’t automation, but reducing mistakes and making the
              process easier to follow consistently.
            </p>{" "}
          </div>
        </div>
      </>
    ),

    item: (
      <>
        <h5>Item overview</h5>
        <div className="before">
          <p>
            Each item also has a centralized overview page combining operational
            and QC-related data.
          </p>
        </div>

        <div className="now">
          <div className="list-photo">
            <div className="list-container">
              <ul>
                <li>Average and expected weights</li>
                <li>Recent orders and supplier history</li>
                <li>Previous defects and repairs</li>
                <li>Supplier-specific notes and breakdown data</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="ending-line">
          The goal was mainly to reduce context switching and make
          cross-checking easier during QC workflows.
        </p>
      </>
    ),

    print: (
      <>
        <div className="item-button">
          <h5>Print button</h5>

          <div className="now">
            <div className="list-photo">
              <div className="list-container">
                <p>
                  Accessed from the order or the item, it opens up the label
                  generator which
                </p>

                <ul>
                  <li>Has the selected order / item already filled out</li>
                  <li>Checks for and fills out reservation data</li>
                </ul>
              </div>
              <ExpandableImage img={labelGen} width="350px" />
            </div>
          </div>
        </div>
      </>
    ),
  };

  return (
    <div className="content quality-control">
      <h4>Quality Control</h4>
      <div className="qc-intro">
        <p>
          This is the part the app was originally built for. Before QualiTrack,
          the whole process was spread across multiple Excel files, Word
          documents, and a lot of manual cross-referencing.
        </p>
        <p>
          It worked, but it was slow and kind of messy. The same data would
          often be written down multiple times in different places.
        </p>
        <p>
          The goal here wasn’t to fully automate everything, but to bring it
          into one place and remove as much repetition as possible.
        </p>
      </div>

      <div className="qc-order-flow-container">
        <div className="qc-section">
          <h5>Order-based workflow</h5>

          <p>
            Everything starts with querying an order from the ERP system. That
            gives a consistent base to work from and avoids re-entering data.
          </p>

          <p>
            Each order shows all items and lets you jump directly into different
            actions without switching tools.
          </p>
        </div>
        <div className="qc-images-container">
          <ExpandableImage img={qcOrders} width="350px" />
          <GrNext />
          <ExpandableImage img={qcOrder} width="350px" />
          <GrNext />
          <ExpandableImage img={qcItem} width="350px" />
        </div>
      </div>

      <p className="qc-intro">
        Each item would then have the following action buttons
      </p>
      <div className="item-action-buttons">
        <div className="actions">
          <button
            onClick={(e) => handleSetSelected("defective")}
            className={`selection-button ${selected === "defective" ? "active" : ""}`}
          >
            <Defect />
          </button>
          <button
            onClick={(e) => handleSetSelected("gold")}
            className={`selection-button ${selected === "gold" ? "active" : ""}`}
          >
            <Gold />
          </button>
          <button
            onClick={(e) => handleSetSelected("diamond")}
            className={`selection-button ${selected === "diamond" ? "active" : ""}`}
          >
            <Diamond />
          </button>
          <button
            onClick={(e) => handleSetSelected("probe")}
            className={`selection-button ${selected === "probe" ? "active" : ""}`}
          >
            <Probe />
          </button>
        </div>

        <div className="helpers">
          <button
            onClick={(e) => handleSetSelected("item")}
            className={`selection-button ${selected === "item" ? "active" : ""}`}
          >
            Item
          </button>
          <button
            onClick={(e) => handleSetSelected("print")}
            className={`selection-button ${selected === "print" ? "active" : ""}`}
          >
            <Print />
          </button>
        </div>
      </div>
      {selected && (
        <div key={selected} className="item-button-description">
          {descriptions[selected]}
        </div>
      )}
      <div className="qc-section">
        <h5>General idea</h5>

        <p>
          Most of the improvements here come down to not having to jump between
          different tools and not having to re-enter the same data over and
          over.
        </p>

        <p>
          Everything is tied to the order and item, so once you’re in, you can
          just move through the process without breaking flow.
        </p>
      </div>
    </div>
  );
}

function Reporting() {
  /**
   * Qualitrack offers the possibility of printing printed reports/documents/tables for many stuffs
   * Those being:
   * prufprotokoll
   * single defect report
   * goods entry documents/tables
   * monthly report
   *
   *o



   Monthly report is the reason this app exists, except the monthly report there are various possible printed documents
   Those being:
   Random Probe
   Singular defect report
   Goods entry processed tables
   Goods entry Loss calculator result
   Monthly report


   Random probe - This one is used exclusively internally and with a proprietary workflow,
   for that reason most of the document is redacted.
   I've added the printable document just because I thought it was pretty neat.
   The real advantage of the random probe is the actual input form that leads the inspector through all the steps.


   Singular defect report - Showcases a single reported defective item.
   It lists the order/item data, the defect reason, severity, in case of in-house repairs
   it also lists the cost as well as any photos that the user might have uploaded.
   This document is used internally aswell as externally when reporting defects to the suppliers.

   Goods Entry
    Processed tables -> Just a regenerated excel table with all necessary columns changed/removed/calculated/added.
    Loss calculator results -> The use of this document is twofold.
    Firstly it is used for ERP input, where for each invoice it lists out all the items with all the necessary data.
    Secondly, since all invoices get saved with their weights it allows for invoice-based/monthly/yearly printed reports which
    shows total amounts of metal delivered aswell as the projected loss figure which is a huge help when comparing with the "actual" state
    Before this happenned by manually writing the weights in an excel table and here you kind of kill two birds with one stone, just putting
    the items on the scale connected to the PC is all a user needs to do. Reducing the time necessary by a *lot*


    Monthly report
    Now this is the big boi, the reason that QualiTrack exists.
    Before QualiTrack this was done manually, fetching the orders, collecting all the data from the various excel tables
    and finally writing it all up manually in a Word document alongside other work responsibilities was a task that usually
    took around 3 days to finish.

    Now, since all the data is already in QualiTrack, we have one 15 minute meeting a month where we together go through the
    Monthly report generator wizard.
    The wizard serves as a comprehensive retrospective (Rückblick) of the previous month, it allows live team insights and addition of any necessary notes.
    At the end it generates a 10-12 page document showcasing:
    - High level metrics - 
        Defect statistics, gold and diamond data, repairs tracking and invidiual supplier cards

        Automated deep-dives - It also flags anomalies, like a single SKU driving the majority of defects, recurring causes or issues that span multiple suppliers at once.

    
    At the end of the day it has reduced the time necessary from days to minutes and the end result is much nicer, more condensed and with more data and stats inferred than was the case before
   *
   */
  return (
    <div className="content reporting">
      <h4>Reporting</h4>

      <div className="reporting-intro">
        <p>
          The monthly reports are the reason that I built QualiTrack. Except
          those QualiTrack makes printing of various documents possible.
        </p>

        <p>
          All of the documents that get printed on A4 are created using
          <span className="code-block">window.print()</span>
        </p>

        <p>Those documents being:</p>
        <ul>
          <li>Monthly report</li>

          <li>Random probe</li>
          <li>Single defect report</li>
          <li className="nested-li">
            Goods Entry
            <ul>
              <li>Processed tables</li>
              <li>Loss calculator results</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="reporting-sections">
        <div className="reporting-wrapper">
          <div className="reporting-section">
            <h5>Monthly reports</h5>

            <div className="reporting-content">
              <div className="reporting-text">
                <p className="accented">
                  This is the reason that QualiTrack exists in the first place.
                </p>

                <p>Before Qualitrack:</p>
                <ul>
                  <li>Fetching the orders</li>
                  <li>Collecting data from many Excel tables</li>
                  <li>Manually writing it in a Word Document</li>
                </ul>

                <p className="accented">
                  Alongside other work responsibilities this usually took{" "}
                  <strong>2-3 days</strong> to finish
                </p>
              </div>

              <ExpandableImage img={report1stPage} width="200px" />
            </div>
          </div>
          <p>
            Now a user follows the Monthly Report Generator wizard and in about{" "}
            <strong>3-5 minutes</strong> of looking over data and making any
            necessary adjustments we get a 10-12 page document.
          </p>
          <MonthlyReportCards />
          <p>
            The main difference is that reporting is no longer a separate task.
            It’s just the final step of a process where the data is already
            there.
          </p>
          <div className="reporting-text">
            <p className="accented">
              In the first months after introducing this, the number of reported
              defects actually went up quite a bit, mostly because it became
              easier to track them.
            </p>
          </div>
        </div>
        <div className="reporting-section">
          <h5>Single defect report</h5>

          <div className="reporting-content">
            <div className="reporting-text">
              <ul>
                <li>Showcases a single reported defective item.</li>
                <li>
                  It lists the order/item data, the defect reason, severity, in
                  case of in-house repairs it also lists the cost as well as any
                  photos that the user might have uploaded.
                </li>

                <li>
                  {" "}
                  This document is used internally as well as externally when
                  reporting defects to the suppliers.
                </li>
              </ul>
            </div>

            <ExpandableImage img={defectReport} width="200px" />
          </div>
        </div>

        <div className="reporting-section">
          <h5>Random Probe</h5>

          <div className="reporting-content random-probe">
            <ExpandableImage img={probeReport} width="200px" />

            <div className="reporting-text">
              <ul>
                <li>
                  Showcases a printed result of a detailed item inspection.
                </li>
                <li>
                  As mentioned in the Quality Control section the user is lead
                  through the process and any necessary data to be checked is
                  already fetched an inside, as well as things like dynamic
                  tolerance calculations and so on.
                </li>

                <li>
                  {" "}
                  This document is mostly redacted not to divulge proprietary
                  company processes
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/**
   Goods Entry
    Processed tables -> Just a regenerated excel table with all necessary columns changed/removed/calculated/added.
    Loss calculator results -> The use of this document is twofold.
    Firstly it is used for ERP input, where for each invoice it lists out all the items with all the necessary data.
    Secondly, since all invoices get saved with their weights it allows for invoice-based/monthly/yearly printed reports which
    shows total amounts of metal delivered aswell as the projected loss figure which is a huge help when comparing with the "actual" state
    Before this happenned by manually writing the weights in an excel table and here you kind of kill two birds with one stone, just putting
    the items on the scale connected to the PC is all a user needs to do. Reducing the time necessary by a *lot*
 */}
      </div>
      <div className="goods-entry-wrapper">
        <h5>Goods Entry</h5>
        <p className="accented">
          There are two printable documents that get generated through the goods
          entry process
        </p>

        <div className="reporting-section">
          <h5>Processed Excel Breakdowns</h5>
          <p className="accented">
            Before QualiTrack Excel tables were processed manually, afterwards
            they were done using Excel scripts but one would still have to look
            up exchange rates automatically. Windows Updates would also often
            mess up the scripts making capturing necessary again.
          </p>
          <p>Now QualiTrack:</p>
          <ul>
            <li>
              {" "}
              Regenerates the Excel table using{" "}
              <span title="Which was a PITA">ExcelJS</span> with all necessary
              columns changed/removed/calculated/added.
            </li>
            <li>Fetches exchange rates automatically</li>
          </ul>
          <p className="accented">
            The time necessary was reduced from minutes to literal seconds.
          </p>
        </div>

        <div className="reporting-section">
          <h5>Loss Calculator Results</h5>
          <p className="accented">
            Before QualiTrack, the items were weighed, extra weights looked up
            manually and written with a pen on a paper for ERP Input. In
            addition, one would at the end, have to sum up the delivered gold
            weight and input it in a separate Excel table
          </p>

          <p>
            {" "}
            Here you kind of kill two birds with one stone, just putting the
            items on the scale connected to the PC is all a user needs to do.
            The weights get taken out automatically and since the sum is already
            there it gets saved aswell.
          </p>

          <p>The use of this document is twofold:</p>
          <ul>
            <li>
              It is used for ERP input, where for each invoice it lists out all
              the items with all the necessary data.
            </li>
            <li>
              All invoices get saved with their weights it allows for
              invoice-based/monthly/yearly printed reports.
            </li>
          </ul>

          <p className="accented">
            The time necessary to process a single invoice has been essentially
            halved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
