import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Modal from "./components/Modal";

function App() {
  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/watch-e-commerce/" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Error} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
