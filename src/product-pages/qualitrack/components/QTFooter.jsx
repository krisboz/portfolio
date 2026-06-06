import React, { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FiCopy, FiCheck } from "react-icons/fi";
import "../styles/QTFooter.scss";

const QTFooter = () => {
  const [copied, setCopied] = useState(false);

  const emailAddress = "kristijan.bozinovic1@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div className="qt-footer">
      <p className="name">Kristijan Božinović, 2026.</p>

      <a
        href={`mailto:${emailAddress}?subject=Inquiry`}
        target="_blank"
        rel="noopener noreferrer"
        title="Open in mail app"
        className="mail-link"
      >
        <SiGmail size={20} />
      </a>

      <button
        onClick={handleCopy}
        title="Click to copy email address"
        className="copy-email-btn"
      >
        <span>{copied ? "Copied!" : emailAddress}</span>

        {copied ? <FiCheck className="success-icon" /> : <FiCopy />}
      </button>
    </div>
  );
};

export default QTFooter;
