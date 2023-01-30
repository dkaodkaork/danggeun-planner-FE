import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";
import { TRACKING_ID } from "./core";

//구글 애널리틱스 적용
import ReactGA from "react-ga4";
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
