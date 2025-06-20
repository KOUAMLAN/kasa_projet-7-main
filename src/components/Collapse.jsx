import React, { useState } from "react";
import "../styles/collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse${isOpen ? " open" : ""}`}>
      <div
        className="collapse-header"
        onClick={() => setIsOpen(open => !open)}
      >
        <span className="collapse-title">{title}</span>
        <span className={`collapse-icon${isOpen ? " rotated" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5" fill="none" stroke="#fff" strokeWidth="2"/>
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapse;