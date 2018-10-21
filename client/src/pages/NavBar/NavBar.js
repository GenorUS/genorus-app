import icons from '../../utils/icons.json';
import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link to="/" className="navbar-navbrand">Genorus</Link>
          <Button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Div className="collapse navbar-collapse" id="navbarResponsive">
              <UL className="navbar-nav ml-auto">
                  {icons.map((icon, i) => {
                    return (
                      <LI key={i} className="nav-item">
                          <Link className="navbar-brand" to={icon.route}><img src={icon.img} style={{width:30, marginRight: 2, marginTop: -4}} alt={icon.alt} />{icon.name}</Link>
                      </LI>
                    )
                  })}
              </UL>
          </Div>
        </Div>
      </Nav>
    );
  }
}

export default NavBar;
