import React, { Component } from "react";
import NavBar from '../NavBar';
import HomeContainer from '../../components/HomeComponents/HomeContainer';
import H1 from '../../components/HomeComponents/H1';
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';
import Div from '../../components/HomeComponents/DIV';
import {Input, FormBtn } from '../../components/SignInComponents/Form';
import Img from '../../components/HomeComponents/Img';
import {Cont} from '../../components/HomeComponents/Card';
import Footer from '../Footer';
import devs from '../../utils/devs.json';
import API from "../../utils/API";
import { Link } from "react-router-dom";



export class SignUp extends Component {
  
  render() {
    return (
      <div style={{background: "linear-gradient(to right, #0e0f0e 0%, #13531e 100%)", backgroundColor: "#176734"}}>
        <NavBar />
        <HomeContainer>
          <H1 className="mb-3" style={{color:"white"}} about="About Genorus" />
          <OL>
            <OrderedItem className="breadcrumb-item">About Genorus</OrderedItem>
            <OrderedItem className="breadcrumb-item active">Genorus Login / Signup</OrderedItem>
          </OL>
          
          <Div className="signUpForm" style={{marginBottom: "250px"}}>
              <div className="leftSide">
                <h3 className="already">Already have an account?</h3>
                <a href="/signin">
                  <button className="submit-btn" type="button">Sign In</button>
                </a>
              </div>

              <Div className="rightSide">
                <h2>Log In</h2>
                <form className="loginForm" method="post">
                  <Input label="First Name" type="text" className="form-control" id="inputFirstname" placeholder="Joe" />
                  <Input label="Last Name" type="text" className="form-control" id="inputLastname" placeholder="Schmoe" />
                  <Input label="Email Address" type="email" className="form-control" id="inputEmail" placeholder="ex: joe@gmail.com" />
                  <Input label="Password" type="password" className="form-control" id="inputPassword" placeholder="Password" />
                  <Input label="Confirm Password" type="password" className="form-control" id="inputPassword" placeholder="Password" />
                  <FormBtn type="submit" className="submit-btn">Sign Un</FormBtn>
                </form>
              </Div>
            </Div>
         
        </HomeContainer>
        <Footer />
      </div>
    );
  }
}