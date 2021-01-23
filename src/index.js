/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import RouterView from "./RouterView";
import { Link, BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </nav>
        <RouterView />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
