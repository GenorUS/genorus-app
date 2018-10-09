import React, { Component } from "react";
import Nav from '../../components/Nav';
import Button from '../../components/Button';
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";


class NavBar extends Component {
 
  render() {
    
    return (
      <Nav>
        <Button className="navbar-toggler navbar-toggler-right" type="button" 
                data-toggle="collapse" data-target="#navbarResponsive"
                aria-controls="navbarResponsive" aria-expanded="false" 
                aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </Button>
        <List>
          <ListItem>
            <a className="nav-link" href="/" style={{color: "white"}}>About Genorus</a>
          </ListItem>
          <ListItem>
            <a className="nav-link" href="#" style={{color: "white"}}>Contact Us</a>
          </ListItem>
          <ListItem>
            <a className="nav-link" href="#" style={{color: "white"}}>Genorus Scholarships</a>
          </ListItem>
          <ListItem>
            <a className="nav-link" href="#" style={{color: "white"}}>Login / Signup</a>
          </ListItem>
        </List>
      </Nav>
    );
  }
}

export default NavBar;