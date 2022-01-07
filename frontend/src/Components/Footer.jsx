import React from "react";
import { Link } from "react-router-dom";
import { navData } from "../constants/navData";

const Footer = () => {
  const year = new Date();
  return (
    <div>
      <footer className="text-center">
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <p className="text-xs font-medium dark:text-white">
              &copy; {year?.getFullYear()} Instagram Downloader.
            </p>

            <div className="flex justify-center space-x-6">
              <a
                href="https://twitter.com/sahilverma_dev"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-blue-500 text-3xl"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href="https://github.com/theviralboy/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-900 dark:text-gray-400 text-3xl"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://www.instagram.com/sahilverma.dev/"
                target="_blank"
                rel="noreferrer"
                className="text-pink-600 text-3xl"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <nav className="grid grid-cols-2 gap-4 p-6 text-sm font-medium bg-slate-800 dark:bg-gray-100 rounded-lg sm:grid-cols-3 lg:grid-cols-6">
              {navData?.map((item, index) => (
                <Link
                  to={item?.route}
                  key={index}
                  className="text-white dark:text-black hover:opacity-75"
                >
                  {item?.title}
                </Link>
              ))}
            </nav>

            <p className="max-w-lg mx-auto text-xs text-gray-500">
              Instagram is the number one social networking platform for sharing
              your life in a photo. Unfortunately, while Insta is fantastic for
              sharing pictures, it's terrible for downloading images as this
              functionality is not natively supported in the IG app or website.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
