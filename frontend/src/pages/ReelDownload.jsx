import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instaReelId } from "../utilities";

const ReelDownload = () => {
  const [link, setLink] = useState();
  const navigate = useNavigate();
  const submit = (e) => {
    e?.preventDefault();
    if (instaReelId(link) !== "!ERROR") navigate(`/p/${instaReelId(link)}`);
  };
  return (
    <div className="min-h-screen flex items-center p-2 dark:bg-slate-800 max-w-7xl mx-auto">
      <div className="w-full">
        {" "}
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-center mb-6 dark:text-white">
            Enter the link of Instagram Reel.
          </h2>
        </div>
        <form onSubmit={(e) => submit(e)}>
          <div className="flex rounded bg-white border-2 p-2">
            <div className="h-auto w-16 flex items-center justify-center">
              <i className="fa fa-link text-xl"></i>
            </div>
            <div className="relative w-full mr-5">
              <input
                type="text"
                className="w-full p-3 text-2xl outline-none"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="ex: https://www.instagram.com/reel/V2drXfoh0r/"
              />
              {link && (
                <div
                  className="absolute top-0 right-0 h-full flex items-center"
                  onClick={() => setLink("")}
                >
                  <i className="fa fa-times cursor-pointer text-gray-800"></i>
                </div>
              )}
            </div>
            <button className="w-20 text-white  bg-blue-600 rounded">
              <i className="fa fa-download"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReelDownload;
