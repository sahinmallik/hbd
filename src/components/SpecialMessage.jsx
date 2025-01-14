import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "tailwindcss/tailwind.css";
import Rose from "./Rose";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const SpecialMessage = () => {
  const [showNext, setShowNext] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleClick = () => {
    setShowNext(true);
  };

  return (
    <>
      {showNext ? (
        <Rose />
      ) : (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
          <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-lg shadow-lg max-h-fit">
            <Tabs>
              <TabList className="flex flex-col mb-4 space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                <Tab className="flex-1 px-4 py-2 text-center bg-gray-700 rounded cursor-pointer hover:bg-gray-600">
                  My Wish
                </Tab>
                <Tab className="flex-1 px-4 py-2 text-center bg-gray-700 rounded cursor-pointer hover:bg-gray-600">
                  Adhuri Baatein
                </Tab>
                <Tab className="flex-1 px-4 py-2 text-center bg-gray-700 rounded cursor-pointer hover:bg-gray-600">
                  Alvida
                </Tab>
                <Tab className="flex-1 px-4 py-2 text-center bg-gray-700 rounded cursor-pointer hover:bg-gray-600">
                  Special PDF
                </Tab>
              </TabList>

              <TabPanel>
                <p className="text-justify text-gray-300">
                  Wishing a very Happy Birthday! 🎂 May your day be filled with
                  joy, love, and laughter. Enjoy every moment to the fullest! 💖
                  Today you become 20 years old. Today you crossed two decades
                  of your life and many more to go. Be happy always and stay
                  happy always. May Allah bless you always with everything 🤲
                  and you will reach the highest of the success.
                </p>
              </TabPanel>
              <TabPanel>
                <p className="text-justify text-gray-300">
                  Hi to the girl I met 3 years ago when she has just passed the
                  12th exam. how are you? may be you are an adult now, crossed
                  18th birthday also. You are an old girl now haha. i loved that
                  girl very and even now also I love her. Those cute expression
                  and calling me while crying, those are sometime which I
                  cherish now also. Now you are an independent strong girl. No
                  need of anyone. But you know one thing i never stop loving
                  you. I might behave so wrong toward you, but never stop loving
                  you and i always believe that people always love two times
                  with a person. First when they first meet each other or they
                  each other. And second time when they spend a lot of time
                  staying away from each other. That time they fall in love for
                  the second time. But you might things why the hell I am
                  sharing all this because usually i am not able to shre with
                  all these one to one conversation because i don't know how to
                  share feelings with someone. So I speaking to you with my
                  creation. I hope all these things doesn't bore you. But I have
                  all these to share with you so I did. If you dont like it then
                  I am Sorry.
                </p>
              </TabPanel>
              <TabPanel className="flex flex-col items-center">
                <p className="mb-4 text-justify text-gray-300">
                  So I have taken a significant amount of time of your life. I
                  am not gonna bore you anymore. Time to leave now. I don't know
                  what is my value in your life now a days, but you will always
                  be that cute little girl whom I love. Last something for you.
                  Goodbye, take care, stay happy, stay safe, stay blessed.
                </p>
                <button
                  onClick={handleClick}
                  className="justify-center p-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-green-500 rounded-md shadow-lg mt-3px-6 hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-75"
                >
                  Click here
                </button>
              </TabPanel>
              <TabPanel className="flex items-center justify-center bg-gray-900">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                  <div className="w-full max-w-4xl p-4 bg-gray-700 rounded-lg shadow-md h-96">
                    <Viewer
                      fileUrl="/pdfs/special.pdf"
                      plugins={[defaultLayoutPluginInstance]}
                    />
                  </div>
                </Worker>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      )}
    </>
  );
};

export default SpecialMessage;
