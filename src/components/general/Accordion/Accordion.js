import React, { useEffect, useMemo, useRef, useState } from "react";
import { ReactComponent as PlusIcon } from "../../../assets/plus.svg";
import { ReactComponent as ArrowIcon } from "../../../assets/arrow-down.svg";
import "./Accordion.css";

export const Accordion = ({ content, title }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef && contentRef.current && contentRef.current.style) {
      if (isActive) {
        contentRef.current.style.maxHeight = "100px";
      } else {
        contentRef.current.style.maxHeight = "0px";
      }
    }
  }, [isActive, contentRef]);

  return (
    <div className="accordion-wrapper">
      <div
        className="accordion-title-wrapper"
        onClick={() => setIsActive((status) => !status)}
      >
        <p className="accordion-icon">
          {isActive ? (
            <ArrowIcon width="25" height="25" className="svg-icon" />
          ) : (
            <PlusIcon width="25" height="25" className="svg-icon" />
          )}
        </p>
        <p className="accordion-title">{title}</p>
      </div>
      <div
        className={`accordion-content ${isActive ? "visible" : "invisible"}`}
        ref={contentRef}
      >
        <i>{content}</i>
      </div>
    </div>
  );
};
