import React from "react";
import orangeLogo from "../../img/librehealth.png";
import { useState } from "react";
import "./NavBarOrange.css";
import { Link } from "react-router-dom";
function NavbarOrange() {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <nav className="navBarOrange">
      <Link to="/">
        <img src={orangeLogo} alt="logo" />
      </Link>
      <div className="navMenuOrange" onClick={handleClick}>
        <i className="fa fa-bars"></i>
      </div>

      <ul className={open ? "openNavItemsOrange" : "navItemsOrange"}>
        <div className="navMenuOrange" onClick={handleClick}>
          <i className="fas fa-times"></i>
        </div>

        <Link to="/about" className="listItemOrange">
          About Us
        </Link>

        <Link to="/glossary" className="listItemOrange">
          Glossary
        </Link>

      </ul>
    </nav>
  );
}

export default NavbarOrange;
