import React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
    <div class="ui large secondary inverted pointing menu ">
     <NavLink to="/" className="nav-link" activeClassName="currentpage">
          Home
        </NavLink>
        {/* <NavLink
          to="/posts"
          className="nav-link"
          activeClassName="currentpage"
        >
          Posts
        </NavLink> */}
        <div class="right menu">
          <NavLink
            to="/login"
            className="nav-link"
            activeClassName="currentpage"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="nav-link"
            activeClassName="currentpage"
          >
            Signup
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
