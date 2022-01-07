import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { navData } from "../constants/navData";
import Toggle from "./toggle";

const Header = () => {
  const [yValue, setYValue] = useState(window.scrollY);
  const [menuOpen, setMenuOpen] = useState(false);
  window.onscroll = () => setYValue(Math.floor(window.scrollY));
  return (
    <>
      <div className="fixed top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 dark:border-gray-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-gray-900/75">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 border-b border-gray-900/10 lg:px-8 lg:border-0 dark:border-gray-300/10 mx-4 lg:mx-0">
            <div className="relative flex items-center justify-between">
              <div>
                <Link to="/">
                  <img
                    className="h-[40px] w-auto dark:invert"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="flex gap-3">
                <Toggle />
                <button
                  onClick={() => setMenuOpen(true)}
                  className="w-11 h-11 bg-gray-700 text-gray-100 dark:bg-gray-100 dark:text-slate-800 rounded-full"
                >
                  <i className="fa fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed top-0 left-0 h-screen w-screen bg-black/50 backdrop-blur z-10 cursor-pointer"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      {menuOpen && (
        <section className="fixed inset-y-0 right-0 z-[999] md:w-[350px] w-full flex">
          <div className="w-full max-w-md">
            <div className="flex flex-col justify-between h-full w-full bg-white divide-y divide-gray-200 shadow-xl">
              <div className="space-y-6 overflow-y-scroll">
                <header className="p-5 bg-gray-600">
                  <div className="flex items-center justify-between space-x-3">
                    <span className="w-32 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                        className="h-9"
                        alt=""
                      />
                    </span>
                    <button
                      aria-label="Close menu"
                      onClick={() => setMenuOpen(false)}
                      className="h-9 w-9 text-white bg-white rounded bg-opacity-10"
                      type="button"
                    >
                      <i className="fa fa-times"></i>
                    </button>
                  </div>
                </header>

                <div className="flex-1 p-6">
                  <nav className="flex flex-col space-y-4 font-medium ">
                    {navData?.map((item, index) => (
                      <NavLink
                        to={item?.route}
                        key={index}
                        className={({ isActive }) =>
                          isActive ? "text-gray-900" : "text-gray-500"
                        }
                        onClick={() => setMenuOpen(false)}
                      >
                        {item?.title}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {yValue > 500 && (
        <button
          className="fixed bottom-2 right-2 h-11 w-11 transition-colors duration-500 lg:z-50 lg:border-b lg:border-gray-900/10 border-gray-50/[0.06] dark:bg-white supports-backdrop-blur:bg-white/95 text-white dark:text-black bg-gray-900/75 z-50 rounded-full"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <i className="fa fa-angle-up"></i>
        </button>
      )}
    </>
  );
};

export default Header;
