import React, { Component } from "react";
import { BrowserRouter as Router,
  Route,
  Switch } from "react-router-dom";
import HomePage from "./Containers/homePage";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    )
  }
}
export default App
