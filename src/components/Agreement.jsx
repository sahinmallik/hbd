import React, { useState } from "react";
import Song from "./Song";

const Agreement = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [showNoButton, setShowNoButton] = useState(true);

  const handleButtonClick = (isYes) => {
    if (isYes) {
      setShowNewComponent(true);
    } else {
      alert(
        "Trying to be smart, huh? I'm watching you! Let me remove the No button now."
      );
      setShowNoButton(false);
    }
  };

  return (
    <>
      {!showNewComponent ? (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900 md:p-10">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg md:p-10">
            <h1 className="mb-4 text-2xl font-bold text-white md:text-4xl">
              Hello Little Kiara,
            </h1>
            <p className="mb-6 text-base text-gray-300 md:text-lg">
              This is Dr. Jug speaking. I have tried to give you some gift on
              your birthday. Are you ready to go ahead?
            </p>
            <div>
              <button
                onClick={() => handleButtonClick(true)}
                className="px-4 py-2 mr-2 text-base font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:px-6 md:py-3 md:mr-4 md:text-lg"
              >
                Yes
              </button>
              {showNoButton && (
                <button
                  onClick={() => handleButtonClick(false)}
                  className="px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 md:px-6 md:py-3 md:text-lg"
                >
                  No
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Song />
      )}
    </>
  );
};

export default Agreement;
