import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./Components/Body/Body";
import CartPage from "./Components/CartPage.js/CartPage";
import HearderNav from "./Components/HeaderNav/HearderNav";

function App() {
  return (
    <>
      <Router>
        <HearderNav />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route exact path="/cartpage" component={CartPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
