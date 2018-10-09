import React from "react";
import './Nav.css';

const Nav = (props) => (
  <nav className="navbar fixed-top navbar-expand-lg bg-dark" {...props}>
    <a className="navbar-brand" style={{color: "white"}}href="/">
      Genorus
    </a>
    {props.children}
  </nav>
);

export default Nav;
