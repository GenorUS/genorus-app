import React, { Component } from "react";
import Router from "react-router-dom";
import NavBar from '../NavBar';
import HomeContainer from '../../components/HomeComponents/HomeContainer';
import H1 from '../../components/HomeComponents/H1';
import { OL, OrderedItem } from '../../components/HomeComponents/OrderedList';
import Div from '../../components/HomeComponents/DIV';
import { Input, FormBtn } from '../../components/SignInComponents/Form';
import Img from '../../components/HomeComponents/Img';
import Footer from '../Footer';
import { Link } from "react-router-dom";



export class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        passowrd: ""
      }
    }

    this.userFormIsValid = this.userFormIsValid.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(event) {
    let { name, value } = event.target

    this.setState({
      [name]: value
    })
  };

  userFormIsValid() {
		var formIsValid = true;
		this.state.errors = {
      email: "",
      passowrd: ""
    }; //clear any previous errors.

    console.log(this.state.errors);
    //TODO Add REGEX TO MATCH AN EMAIL
		if (this.state.email.length < 3) {
      console.log("In email")
			this.state.errors.email = 'Please Enter a valid email Address';
			formIsValid = false;
		}

		if (this.state.password.length < 8) {
			this.state.errors.password = 'Password must be at least 8 characters.';
			formIsValid = false;
		}

		this.setState({errors: this.state.errors});
		return formIsValid;
  }
  
  handleLogin(event) {
		event.preventDefault();
    console.log("Clicked")
		if (!this.userFormIsValid()) {
			return;
		}

		// AuthorApi.saveAuthor(this.state.author);
		// this.setState({dirty: false});
		// this.transitionTo('/scholarship');
	};

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
                <Input name="email" label="Email Address" type="email"  value={this.state.email} id="inputEmail" placeholder="ex: joe@gmail.com" error={this.state.errors.email} onChange={this.handleInput} />
                <Input name="password" label="Password" type="password" value={this.state.password} id="inputPassword" placeholder="Password" error={this.state.errors.password} onChange={this.handleInput} />
                <FormBtn type="submit" className="submit-btn" onClick={this.handleLogin}>Sign In</FormBtn>
              </form>
              {this.state.errors.email ? <div className="input mt-1" style={{color: 'red'}}>{this.state.errors.email}</div> : null}
              {this.state.errors.password ? <div className="input mt-1" style={{color: 'red'}}>{this.state.errors.password}</div> : null}
            </Div>
          </Div>

        </HomeContainer>
        <Footer />
      </div>
    );
  }
}