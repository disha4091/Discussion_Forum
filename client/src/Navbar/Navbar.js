import React from "react";
import "./nav.css";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
    <div class="ui large secondary inverted pointing menu ">
      <NavLink to="/" className="nav-link" activeClassName="currentpage">
         Home
      </NavLink>
      
      <div className="ui simple dropdown item">
        <p className="domain">Domains</p>
        <i class="dropdown icon"></i>
        <div class="menu">
            <Link to="/mlposts" class="item">Machine Learning</Link>
            <Link to="/webposts" class="item">Web Development</Link>          
            <Link to="/aiposts" class="item">Artificial Intelligence</Link>
        </div>
      </div>

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
