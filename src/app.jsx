import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import HomePage from "./Containers/homePage";
import Products from "./Containers/products";
import SignUp from "./Containers/signUp";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" component={Products} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;
