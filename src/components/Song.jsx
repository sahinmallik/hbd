import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import BirthdayMessage from "./BirthdayMessage";

const Song = () => {
  const [isSongPlaying, setIsSongPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [showSongComponent, setShowSongComponent] = useState(true);
  let audio = null;

  const playYourSong = () => {
    audio = new Audio("/src/Song/ishq-sufiyana-128-ytshorts.savetube.me.mp3");
    audio.play();
    setIsSongPlaying(true);
    setCurrentSong("yourSong");
    setShowSongComponent(false);
  };

  const playDedicatedSong = () => {
    audio = new Audio(
      "/src/Song/ek-dil-ek-jaan-from-padmaavat-128-ytshorts.savetube.me.mp3"
    );
    audio.play();
    setIsSongPlaying(true);
    setCurrentSong("dedicatedSong");
    setShowSongComponent(false);
  };

  return (
    <div>
      {showSongComponent ? (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-900">
          <p className="px-4 mb-4 text-sm text-center text-gray-300 md:px-0">
            Choose wisely as throughout the exhibition only that song will go
            on, and you cannot change it.
          </p>
          <div className="w-full max-w-md p-6 text-center bg-gray-800 rounded-lg shadow-lg">
            <div className="flex flex-col items-center space-y-4">
              <button
                className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={playYourSong}
              >
                Your Song
              </button>
              <button
                className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-green-500 rounded-full shadow-lg hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
                onClick={playDedicatedSong}
              >
                The Song I Dedicated You
              </button>
            </div>
          </div>
        </div>
      ) : (
        <BirthdayMessage />
      )}
    </div>
  );
};

export default Song;
