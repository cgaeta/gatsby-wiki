import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route,
  hashHistory
} from "react-router-dom";

import App from "./App";
// import Person from './components/Person';
import People from "./components/People";
import QueryRace from "./components/QueryRace";
import QueryList from "./components/QueryList";

import { Race } from "./types.ts";

const Test = () => {
  return <QueryList options={Object.keys(Race).filter(key => !Number(key))} />;
};

var appElement = document.createElement("div");
appElement.id = "app";
document.body.append(appElement);

render(
  <Router>
    <App>
      <Route path="/" component={People} />
    </App>
  </Router>,
  document.getElementById("app")
);
