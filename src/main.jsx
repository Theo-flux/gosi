import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/zobomap.css";
import Router from "./Router.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
