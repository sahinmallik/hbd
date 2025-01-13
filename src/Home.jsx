import React, { useState } from "react";
import Agreement from "./components/Agreement";
const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="flex items-center justify-center min-h-screen text-white bg-gray-900">
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="relative w-full max-w-sm p-6 bg-gray-700 rounded-lg shadow-lg">
              <button
                onClick={handleClosePopup}
                className="absolute text-white bg-transparent top-2 right-2 hover:text-gray-400"
              >
                &times;
              </button>
              <h2 className="mb-4 text-xl font-bold text-center">Disclaimer</h2>
              <p className="mb-4 text-center">
                This pages are designed and Developed by Sahin Mallik and
                requesting you to use headphone for better experience.
              </p>
            </div>
          </div>
        </div>
      )}

      {!showPopup && <Agreement />}
    </>
  );
};

export default Home;
