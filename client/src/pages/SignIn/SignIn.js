import React, { Component } from "react";
import NavBar from '../NavBar';
import HomeContainer from '../../components/HomeComponents/HomeContainer';
import H1 from '../../components/HomeComponents/H1';
import { OL, OrderedItem } from '../../components/HomeComponents/OrderedList';
import Div from '../../components/HomeComponents/DIV';
import { Input, FormBtn } from '../../components/SignInComponents/Form';
import Img from '../../components/HomeComponents/Img';
import { Cont } from '../../components/HomeComponents/Card';
import Footer from '../Footer';
import { Link } from "react-router-dom";



export class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      value: "",
      errors: {}
    }

    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(event) {
    let { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div style={{ backgroundImage: `url(/assets/images/backgrounds/genorussigninbackground.jpg)`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <NavBar />
        <HomeContainer>
          <section id="nextgroup" style={{ paddingTop: "70px", paddingBottom: "70px" }}>
            <div id="ui">
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
              <H1 className="mb-3" style={{ color: "#fff" }} about="Genorus Sign In" />
            </div>
          </section>
          <OL>
            <OrderedItem className="breadcrumb-item">Genorus</OrderedItem>
            <OrderedItem className="breadcrumb-item active">Sign In</OrderedItem>
          </OL>

          <Div className="signUpForm" style={{ marginBottom: "250px" }}>
            <div className="leftSide">
              <h3>Don't have an account yet?</h3>
              <a href="/signup">
                <button className="submit-btn" type="button">Sign Up</button>
              </a>
            </div>
            {/* {name, label, placeholder, ref, value, error, onChange} */}
            <Div className="rightSide">
              <h2 style={{ color: "#fff" }} >Sign In</h2>
              <form className="loginForm" method="post">
                <Input name="email" label="Email Address" type="email"  value={this.state.value} id="inputEmail" placeholder="ex: joe@gmail.com" error={this.state.errors.email} onChange={this.handleInput} />
                <Input name="password" label="Password" type="password" id="inputPassword" placeholder="Password" error={this.state.errors.password} onChange={this.handleInput} />
                <FormBtn type="submit" className="submit-btn">Sign In</FormBtn>
              </form>
            </Div>
          </Div>

        </HomeContainer>
        <Footer />
      </div>
    );
  }
}