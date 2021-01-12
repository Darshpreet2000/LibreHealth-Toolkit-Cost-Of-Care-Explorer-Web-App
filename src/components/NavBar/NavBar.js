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
    <nav className="nav-bar">
      <Link to="/">
        <img src={whiteLogo} alt="logo" />
      </Link>
      <div className="nav-menu" onClick={handleClick}>
        <i className="fa fa-bars"></i>
      </div>

      <ul className={open ? "open-nav-items" : "nav-items"}>
        <div className="nav-menu" onClick={handleClick}>
          <i className="fas fa-times"></i>
        </div>
        <Link to="/inpatient-procedures" className="list-item">
        Inpatient Procedure
        </Link>
        <Link to="/outpatient-procedures"className="list-item">
        Outpatient Procedure
        </Link> 
        <Link to="/glossary" className="list-item">
          Glossary
        </Link>
        <Link to="/about" className="list-item">
          About Us
        </Link>

      
      </ul>
    </nav>
  );
}

export default Navbar;
