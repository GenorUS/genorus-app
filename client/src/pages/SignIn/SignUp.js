import React, { Component } from "react";
import NavBar from '../NavBar';
import HomeContainer from '../../components/HomeComponents/HomeContainer';
import H1 from '../../components/HomeComponents/H1';
import { OL, OrderedItem } from '../../components/HomeComponents/OrderedList';
import Div from '../../components/HomeComponents/DIV';
import { Input, FormBtn } from '../../components/SignInComponents/Form';
import Footer from '../Footer';
import UserSignUp from '../../utils/UserApi';






export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      errors: {
        email: "",
        password: "",
        userName: "",
        firstName: "",
        lastName: "",
        notUnique: ""
      }
    }

    this.style = { color: 'red', fontWeight: 'bolder', fontSize: "18px" }

    this.userFormIsValid = this.userFormIsValid.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
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
    this.setState({
      errors: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        noMatch: ""
      }
    }); //clear any previous errors.
    let email, firstName, lastName, password, confirmPassword, noMatch, userName;

    //TODO Add REGEX TO MATCH AN EMAIL
    if (this.state.email.length < 3) {
      email = 'Please Enter a valid email Address';
      formIsValid = false;
    }
    if (this.state.firstName.length < 1) {
      firstName = 'Please Enter a first name!';
      formIsValid = false;
    }
    if (this.state.lastName.length < 1) {
      lastName = 'Please Enter a last name!';
      formIsValid = false;
    }

    if (this.state.password.length < 8) {
      password = 'Password must be at least 8 characters.';
      formIsValid = false;
    }

    if (this.state.password !== this.state.confirmPassword) {
      noMatch = "Passwords must match!"
    }
    if (this.state.userName.length < 1) {
      userName = 'Please enter a username.';
      formIsValid = false;
    }

    this.setState({ errors: { email, firstName, lastName, password, confirmPassword, userName, noMatch } });
    return formIsValid;
  }

  handleSignUp(event) {
    event.preventDefault();
    
    if (!this.userFormIsValid()) {
      return;
}
    let userData = { ...this.state }
    
    UserSignUp.signUp(userData, (data) => {
      console.log("callback ", data.data);
      if(data.data.createdAt) {
        this.props.history.push("/signin");
      } else {
        return this.setState({errors: { notUnique: "There is already a user with that email. Please use another"}});
      }
    });
    // AuthorApi.saveAuthor(this.state.author);
    // this.setState({dirty: false});
    // this.transitionTo('/scholarship');
  };
  render() {
    return (
      <div style={{ backgroundImage: `url(/assets/images/backgrounds/genorussignupbackground.jpg)`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment:"fixed", webkitBackgroundSize: "cover", mozBackgroundSize: "cover", oBackgroundSize: "cover", backgroundSize: "cover" }}>
        <NavBar />
        <HomeContainer>
          <section id="nextgroup" style={{ paddingTop: "70px", paddingBottom: "70px" }}>
            <div id="ui">
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
              <H1 className="mb-3" style={{ color: "white" }} about="Genorus Sign Up" />
            </div>
          </section>
          <OL>
            <OrderedItem className="breadcrumb-item">Genorus</OrderedItem>
            <OrderedItem className="breadcrumb-item active">Sign Up</OrderedItem>
          </OL>

          <Div className="signUpForm" style={{ marginBottom: "250px" }}>
            <div className="leftSide">
              <h3 className="already">Already have an account?</h3>
              <a href="/signin">
                <button className="submit-btn" type="button">Sign In</button>
              </a>
            </div>

            <Div className="rightSide">
              <h2 style={{ color: "#fff" }} >Sign Up</h2>
              <form className="loginForm" method="post">
                <Input name="firstName" label="First Name" type="text" value={this.state.firstName} id="inputFirstName" placeholder="Joe" error={this.state.errors.firstName} onChange={this.handleInput} />
                <Input name="lastName" label="Last Name" type="text" value={this.state.lastName} id="inputLastName" placeholder="Schmoe" error={this.state.errors.lastName} onChange={this.handleInput} />
                <Input name="userName" label="User Name" type="text" value={this.state.userName} id="inputFirstName" placeholder="Schmoe123" error={this.state.errors.userName} onChange={this.handleInput} />
                <Input name="email" label="Email Address" type="email" value={this.state.email} id="inputEmail" placeholder="ex: joe@email.com" error={this.state.errors.email} onChange={this.handleInput} />
                <Input name="password" label="Password" type="text" value={this.state.password} id="inputPassword" placeholder="Passowrd" error={this.state.errors.password} onChange={this.handleInput} />
                <Input name="confirmPassword" label="Confirm Password" type="text" value={this.state.confirmPassword} id="inputPassword" placeholder="Passowrd" error={this.state.errors.confirmPassword} onChange={this.handleInput} />
                <FormBtn type="submit" className="submit-btn" onClick={this.handleSignUp}>Sign Up</FormBtn>
              </form>
              {this.state.errors.firstName ? <div className="input mt-1" style={this.style}>{this.state.errors.firstName}</div> : null}
              {this.state.errors.lastName ? <div className="input mt-1" style={this.style}>{this.state.errors.lastName}</div> : null}
              {this.state.errors.userName ? <div className="input mt-1" style={this.style}>{this.state.errors.userName}</div> : null}
              {this.state.errors.email ? <div className="input mt-1" style={this.style}>{this.state.errors.email}</div> : null}
              {this.state.errors.password ? <div className="input mt-1" style={this.style}>{this.state.errors.password}</div> : null}
              {this.state.errors.confirmPassword ? <div className="input mt-1" style={this.style}>{this.state.errors.confirmPassword}</div> : null}
              {this.state.errors.noMatch ? <div className="input mt-1" style={this.style}>{this.state.errors.noMatch}</div> : null}
              {this.state.errors.notUnique ? <div className="input mt-1" style={this.style}>{this.state.errors.notUnique}</div> : null}
            </Div>
          </Div>

        </HomeContainer>
        <Footer />
      </div>
    );
  }
}