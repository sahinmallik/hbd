import React, { useState } from "react";
import "./cake.css";
import SpecialMessage from "./SpecialMessage";

const Cake = () => {
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
          <div className="cake-container">
            <p className="wish"> ♥ Happy birthday Little Kiara ♥ </p>
            <div className="pyro">
              <div className="before"></div>
              <div className="after"></div>
            </div>
            <div className="box">
              <div className="plate"></div>
              <div className="layer">
                <div className="fill"></div>
              </div>
              <div className="layer">
                <div className="fill"></div>
              </div>
              <div className="icing">
                <div className="icing-sm"></div>
                <div className="icing-sm"></div>
                <div className="icing-sm"></div>
                <div className="icing-sm"></div>
                <div className="icing-sm"></div>
                <div className="icing-sm"></div>
              </div>
              <div className="candles">
                <div className="candle">
                  <div className="flame"></div>
                </div>
                <div className="candle">
                  <div className="flame"></div>
                </div>
                <div className="candle">
                  <div className="flame"></div>
                </div>
              </div>
            </div>
            <button onClick={handleClick} className="go-next-button">
              Go Next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Cake;
