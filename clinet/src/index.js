import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Route.jsx";
import { Provider } from "react-redux";
import store from "./reduxStore/store";
import { storesFetch } from "./reduxStore/storesSlice";

store.dispatch(storesFetch());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
