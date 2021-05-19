import React from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/search";
import History from "./components/history";
const App = () => {
  return (
    <div className="container-fluid">
      <nav className="bg-light sticky-top">
        <div className="nav nav-tabs">
          <NavLink to="/home" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/search" className="nav-link">
            Search
          </NavLink>
          <NavLink to="/history" className="nav-link">
            History
          </NavLink>
        </div>
      </nav>
      <div className="tab-content">
        <div className="tab-pane fade show active">
          {
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/history" component={History} />
              <Redirect from="/" to="/home" />
            </Switch>
          }
        </div>
      </div>
    </div>
  );
};

export default App;
