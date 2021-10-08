import React, { Component } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { Container } from "react-bootstrap";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import New from "./components/New";
import Show from "./components/Show";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container className="main-container">
          <Switch>
            <Route exact path="/products" component={ProductList}></Route>
            <Route exact path="/products/new" component={New}></Route>
            <Route exact path="/products/:id" component={Show}></Route>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
