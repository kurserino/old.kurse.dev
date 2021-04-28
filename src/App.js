import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Page from "./Page";
import Scrollbar from "./Scrollbar";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Illustrations from "./Illustrations";

export default function App({ ...props }) {
  return (
    <Scrollbar>
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
    </Scrollbar>
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
