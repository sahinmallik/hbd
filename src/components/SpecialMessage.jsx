import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "tailwindcss/tailwind.css";

const SpecialMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-900">
      <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg">
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
          </TabList>

          <TabPanel>
            <p className="text-gray-300">
              This is the content for the first tab.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="text-gray-300">
              This is the content for the second tab.
            </p>
          </TabPanel>
          <TabPanel>
            <p className="text-gray-300">
              This is the content for the third tab.
            </p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SpecialMessage;
