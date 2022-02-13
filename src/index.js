import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Store
import {store} from './store';

// Components
import App from "./containers/App";

// Styles
import "./index.css";

ReactDOM.render(
  // Envolviendo aplicación en el provider que contiene el store y así todos tendran acceso a este
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
