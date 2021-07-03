import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./Components/Body/Body";
import HearderNav from "./Components/HeaderNav/HearderNav";

function App() {
  return (
    <>
      <Router>
        <HearderNav />
        <Switch>
          <Route exact path="/" component={Body} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
