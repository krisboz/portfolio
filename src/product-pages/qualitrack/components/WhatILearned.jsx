import React from "react";
import "../styles/WhatILearned.scss";

const WhatILearned = () => {
  return (
    <div className="what-i-learned">
      <h4>What I Learned</h4>

      <div className="wil-inner">
        <p>
          QualiTrack was the first project where I had to think beyond just
          writing code.
        </p>
        <p>Technically, I learned a lot about a lot of subjects:</p>
        <ul>
          <li>PDF generation</li>
          <li>Excel manipulation</li>
          <li>Hardware integration</li>
          <li>Database design</li>
          <li>Authentication</li>
          <li>Security</li>
          <li>On-Premises Deployment</li>
          <li>Windows Server Environments</li>
        </ul>
        <p>
          The biggest challenges and learning experiences had not that much to
          do with code and everything to do with working with people.{" "}
        </p>

        <p>
          The project grew over roughly ten months, so I also got experience
          maintaining and extending a codebase rather than constantly starting
          fresh.
        </p>

        <p>
          In the beginning it proved surprisingly difficult to keep the
          discovery meetings on track and to not only extract but even know
          everything that's required.
        </p>
        <p>
          It taught me not to assume what a client wants, which caused a nice
          amount of refactoring in the start.
        </p>
        <p>
          It also definitely put my time-management and task prioritization
          skills to the test, especially since I wasn't working on the app
          full-time.
        </p>

        <p>
          One thing I'm quite happy with is that the app eventually reached a
          stable state where I very rarely have to spend time on it.
        </p>
        <p>
          Also seeing people around me use something I built daily just feels
          real nice. :)
        </p>
      </div>
    </div>
  );
};

export default WhatILearned;
