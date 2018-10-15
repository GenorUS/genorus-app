import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";

const Nav = props => {

  return (
    <nav {...props}>{props.children}</nav>
  )
}

const Div = props => {
  return (
    <div {...props}>{props.children}</div>
  )
}
const A = props => {
  return (
    <a {...props}>{props.children}</a>
  )
}
const Button = props => {
  return (
    <button {...props}>{props.children}</button>
  )
}
const UL = props => {
  return (
    <ul {...props}>{props.children}</ul>
  )
}
const LI = props => {
  return (
    <ul {...props}>{props.children}</ul>
  )
}


class NavBar extends Component {
 
  render() {
    
    return (
      <Nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top" >
        <Div className="container">
          <A className="navbar-brand" href="/">Genorus</A>
          <Button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Div className="collapse navbar-collapse" id="navbarResponsive">
              <UL className="navbar-nav ml-auto">
                  <LI className="nav-item">
                    <A className="navbar-brand" href="/" image src="../../../assets/images/icons/bigsponsorpics/aboutusicon.png">About Genorus</A>
                  </LI>
                  <LI className="nav-item">
                    <A className="navbar-brand" href="/contact">Contact</A>
                  </LI>
                  <LI className="nav-item">
                    <A className="navbar-brand" href="/scholarships">Genorus Scholarships</A>
                  </LI>
                  <LI className="nav-item">
                    <A className="navbar-brand" href="/signin">Login / Signup</A>
                  </LI>
              </UL>
          </Div>
        </Div>
      </Nav>
    );
  }
}

export default NavBar;