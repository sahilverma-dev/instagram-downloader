import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./index.css";

import "react-lazy-load-image-component/src/effects/blur.css";
import { ThemeProvider } from "./context/themeContext";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
