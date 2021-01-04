import React from "react";
import "./NavBar.css";
import whiteLogo from "../../img/libre_white.png";
import { useState } from "react";

import { Link } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <nav className="navBar">
      <Link to="/">
        <img src={whiteLogo} alt="logo" />
      </Link>
      <div className="navMenu" onClick={handleClick}>
        <i className="fa fa-bars"></i>
      </div>

      <ul className={open ? "openNavItems" : "navItems"}>
        <div className="navMenu" onClick={handleClick}>
          <i className="fas fa-times"></i>
        </div>
        <Link to="/about" className="listItem">
          About
        </Link>

        <Link to="/glossary" className="listItem">
          Glossary
        </Link>

        <Link to="/compare-hospitals" className="listItem">
          Compare Hospitals
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
