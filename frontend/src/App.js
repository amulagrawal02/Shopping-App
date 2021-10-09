import React, { Component } from "react";
import ProductList from "./components/products/ProductList";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import New from "./components/pages/New";
import Show from "./components/pages/Show";
import Edit from "./components/pages/Edit";
import Layout from "./components/layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <Switch>
          <Route exact path="/products" component={ProductList}></Route>
          <Route exact path="/products/new" component={New}></Route>
          <Route exact path="/products/:id" component={Show}></Route>
          <Route exact path="/products/:id/edit" component={Edit}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
