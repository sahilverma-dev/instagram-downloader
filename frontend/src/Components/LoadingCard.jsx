import React from "react";

const LoadingCard = () => {
  return (
    <div className="p-2 bg-white rounded">
      <div className="w-full aspect-square rounded overflow-hidden">
        <div className="animate-pulse h-full">
          <div className="bg-gray-500 h-full w-full"></div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex animate-pulse flex-row items-center h-full gap-1">
          <div className="w-12 bg-gray-500 h-12 rounded-full "></div>
          <div className="flex flex-col space-y-1">
            <div className="w-36 bg-gray-500 h-5 rounded-md "></div>
            <div className="w-24 bg-gray-500 h-4 rounded-md "></div>
          </div>
        </div>
        <div className="flex animate-pulse flex-row items-center h-full mt-4 gap-2">
          <div className="w-36 bg-gray-500 h-8 rounded "></div>
          <div className="w-36 bg-gray-500 h-8 rounded "></div>
          <div className="w-36 bg-gray-500 h-8 rounded "></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingCard;
