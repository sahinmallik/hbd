import "./BirthdayMessage.scss";
import React, { useState } from "react";
import SpecialMessage from "./SpecialMessage";

const BirthdayMessage = () => {
  const [showNext, setShowNext] = useState(false);

  const handleClick = () => {
    setShowNext(true);
  };

  return (
    <>
      {showNext ? (
        <SpecialMessage />
      ) : (
        <>
          <div className="birthday">
            <div className="current">
              <span>2</span>
              <span>5</span>
            </div>
            <span className="plus">&</span>
            <div className="frontend">
              <span className="frontend-text">0</span>
            </div>
            <div className="final">
              Happy <span>Birthday</span>
            </div>
          </div>
          <div className="fa fa-birthday-cake"></div>
          <button className="button" onClick={handleClick}>
            Go Next
          </button>
        </>
      )}
    </>
  );
};

export default BirthdayMessage;
