import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import ThemeContextProvider from "./ThemeContext/ThemeContext";

import App from "./App";
import { HashRouter } from "react-router-dom";

const appJsx = (
  <HashRouter>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </HashRouter>
);

ReactDOM.render(appJsx, document.getElementById("root"));
