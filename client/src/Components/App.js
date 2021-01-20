import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import SignIn from "./SignIn";
import Signup from "./Signup";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <main>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/signup" component = {Signup}/>
        <Route exact path = "/signin" component = {SignIn}/>
        <Route exact path = "/cart" component = {Cart}/>
        <Route exact path = "/cart/:id" component = {Cart}/>
        <Route exact path = "/ProductDetail" component = {ProductDetail}/>
        <Route path = "/ProductDetail/:id" component = {ProductDetail}/>
        <Route component = {NotFound}/>
      </Switch>
    </main>
    </BrowserRouter>
  );
}

export default App;
