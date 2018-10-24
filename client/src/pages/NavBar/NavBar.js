import icons from '../../utils/icons.json';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from '../../utils/logout';

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
  constructor(props){
      super(props)

      this.state = {
          jwt: localStorage.getItem('jwtToken'),
          user: {}
      }
  }

  componentWillMount() {
      try {
          // To access the payload split the jwt token into its header.payload.signature parts and grab just the payload
          let enc = this.state.jwt.replace(/JWT\s+/).split(".")[1];
          // Then parse the base64
          let payload = JSON.parse(window.atob(enc));
          //FOR SOME ODD REASON I CAN'T USE SET STATE AND THIS DOESN'T GIVE AN ERROR, RAGE
          // this.state.user = payload
          this.setState({user : payload})
      } catch (e) {
          return null
      }
  }

  logout() {
      Logout.logout();
      this.props.history.push("/")
  }
 
  render() {
        let { firstname} = this.state.user
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
                  <LI  className="nav-item">
                      {icons.map((icon, i) => {
                        return (
                              <Link key={i} className="navbar-brand" to={icon.route}><img src={icon.img} style={{width:30, marginRight: 2, marginTop: -4}} alt={icon.alt} />{icon.name}</Link>
                        )
                      })}
                      {this.state.jwt ? <Link to={"/"} className="navbar-brand" onClick={this.logout}>{firstname} , Logout</Link> :
                          <Link to={"/signin"} className="navbar-brand">
                              <img src="/assets/images/icons/loginicon.png" style={{width:30, marginRight: 2, marginTop: -4}} alt="loginicon" />
                              Sign Up / Sign In
                          </Link>}
                  </LI>

              </UL>
          </Div>
        </Div>
      </Nav>
    );
  }
}

export default NavBar;
