import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

import Faq from "../Components/Faq";
import Tools from "../Components/Tools";

import { instaPostId } from "../utilities";

import { ThemeContext } from "../context/themeContext";

const Home = () => {
  const [link, setLink] = useState();

  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const submit = (e) => {
    e?.preventDefault();
    if (instaPostId(link) !== "!ERROR") navigate(`p/${instaPostId(link)}`);
  };
  return (
    <div className="min-h-screen bg-transparent">
      <section
        className={`relative dark:text-white bg-slate-400 ${
          theme === "dark" && "gradient-bg-welcome"
        } h-screen`}
        role="banner"
      >
        <div className="max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8 sm:py-36 lg:h-screen lg:flex lg:items-center">
          <div className="max-w-3xl mx-auto text-center">
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Instagram-512.png"
              alt="insgram logo"
              className="w-20 mx-auto pb-5"
            />
            <h1 className="text-3xl font-extrabold text-transparent sm:text-6xl bg-clip-text bg-gradient-to-r from-pink-700 via-blue-700 to-fuchsia-900 in dark:from-green-300 dark:via-blue-500 dark:to-purple-600">
              Download Instagram
              <span className="text-7xl">
                <Typewriter
                  options={{
                    strings: ["Photos", "Videos", "Reels", "IGTV Videos"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>

            <p className="max-w-xl mx-auto mt-6 text-lg">
              Use our Instagram photo downloader tool to download your favorite
              Instagram pictures.
            </p>

            <div className="mt-8 sm:justify-center sm:flex">
              <a
                href="#main-section"
                className="block px-5 py-3 font-medium bg-purple-600 rounded hover:bg-purple-500"
              >
                Try Now
              </a>
            </div>
          </div>
        </div>
      </section>
      <div id="main-section" className="max-w-7xl mx-auto">
        <div className="pt-10">
          <h2 className="text-4xl font-bold text-center mb-2 dark:text-white">
            Paste the link
          </h2>
        </div>
        <div className="py-10 p-2 rounded">
          <div>
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
                    placeholder="ex: https://www.instagram.com/p/V2drXfoh0r/"
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
      </div>
      <Faq />
      <Tools />
    </div>
  );
};

export default Home;
