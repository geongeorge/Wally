/** @format */

import { Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Help from "./pages/help";

const RouterView = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default RouterView;
