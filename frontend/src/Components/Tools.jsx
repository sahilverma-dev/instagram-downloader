import React from "react";
import { toolsData } from "../constants/toolsData";

const Tools = () => {
  return (
    <div className="max-w-7xl mx-auto dark:text-white py-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center mb-5 ">Our Tools</h2>
        <p className="mb-2">
          Check out our list of Instagram tools. If you can't find the tool
          you're looking feel free to write us and we will do our best to
          accomodate you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 overflow-hidden">
        {toolsData?.map((item, index) => (
          <div key={index} className="w-full overflow-hidden">
            <div className="block p-8 h-full bg-slate-500 text-black dark:bg-gray-800 border border-gray-800 shadow-xl rounded-xl ">
              <div className="flex w-12 h-12 rounded-full items-center justify-center text-gray-100 dark:text-black bg-gray-900 dark:bg-blue-400">
                <i className={`${item?.icon} `}></i>
              </div>
              <h3 className="mt-3 text-xl font-bold dark:text-white">
                {item?.titlle}
              </h3>
              <p className="mt-4 text-sm dark:text-gray-300">{item?.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
