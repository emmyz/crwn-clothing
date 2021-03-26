import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignPage from "./pages/sign/sign.component";
import NavBar from "./components/nav-bar/nav-bar.component";

import "./App.css";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign" component={SignPage} />
      </Switch>
    </div>
  );
}

export default App;
