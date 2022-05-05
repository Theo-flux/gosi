import React from "react";
import { hydrate, render } from "react-dom";
import "./assets/css/zobomap.css";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
}
