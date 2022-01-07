import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-11 w-11 text-gray-700 dark:text-gray-600 bg-white shadow-none p-2 focus:outline-none text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <i className="fa fa-sun"></i>
        </button>
      ) : (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="h-11 w-11 text-white dark:text-gray-600 bg-gray-700 focus:outline-none shadow-none p-2 text-lg rounded-full outline-none ring-transparent cursor-pointer"
        >
          <i className="fa fa-moon"></i>
        </button>
      )}
    </>
  );
};

export default Toggle;
