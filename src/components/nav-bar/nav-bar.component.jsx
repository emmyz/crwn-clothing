import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";

import "./nav-bar.styles.scss";

const NavBar = () => (
  <div className="nav-container">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/sign">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default NavBar;
