import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NotFound from "./NotFound";
import SignIn from "./SignIn";
import Signup from "./Signup";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <main>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/signup" component = {Signup}/>
        <Route exact path = "/signin" component = {SignIn}/>
        <Route component = {NotFound}/>
      </Switch>
    </main>
    </BrowserRouter>
  );
}

export default App;
