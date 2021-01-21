import React from "react";
import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import SignIn from "./SignIn";
import Signup from "./Signup";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail"
import Footer from "./Footer";
import Mail from "./Mail";


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
        <Route exact path = "/ProductDetail/:id" component = {ProductDetail}/>
        <Route exact path = "/mail" component = {Mail}/>
        <Route component = {NotFound}/>
        
      </Switch>
    </main>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
