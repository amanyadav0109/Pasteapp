import React from "react";
import "../Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navdiv">
      <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "normal-link"}>
        Home
      </NavLink>
      <NavLink to="/pastes" className={({ isActive }) => isActive ? "active-link" : "normal-link"}>
        Paste
      </NavLink>
    </div>
  );
};

export default Navbar;
