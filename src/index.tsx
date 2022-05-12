import React from "react";
import ReactDOM from "react-dom/client";
import "./resources/static/css/index.css";
import App from "./views";
import { Provider } from "react-redux";
import { configureStore } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={configureStore}>
    <App />
  </Provider>
);
