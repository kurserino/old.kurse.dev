import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Page from "./Page";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Illustrations from "./Illustrations";

export default function App({ ...props }) {
  return (
    <Page>
      <Switch>
        <Route exact path={["/", "/projects/:project"]}>
          <Projects />
        </Route>
        <Route path="/about-me">
          <AboutMe />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/illustrations">
          <Illustrations />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Page>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
