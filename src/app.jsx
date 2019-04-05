import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./Containers/homePage";
import Products from "./Containers/products";
import SignUp from "./Containers/signUp";
import Layout from "./Containers/layout";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" exact component={SignUp} />
            <Layout>
              <Route path="/products" exact component={Products} />
            </Layout>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
