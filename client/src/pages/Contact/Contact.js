import React, { Component } from "react";
import NavBar from '../NavBar';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import PageHeading from "../../components/PageHeading";
import ContactForm from "../../components/ContactForm";
import ContactDetails from "../../components/ContactDetails";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "phone": "",
      "email": "",
      "message": ""
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    let { name, value } = event.currentTarget;
    console.log(name + " " + value)
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    //TODO Send EMAIL TO US, MAYBE STORE IN DATABASE
    console.log(this.state)
  }

  render() {
    return (
      <div style={{ background: "linear-gradient(to right, #0e0f0e 0%, #13531e 100%)", backgroundColor: "#176734" }}>
        <NavBar />
        <Container>
          <PageHeading name={"Contact Genorus"} />
          <ContactDetails />
          <ContactForm handleInput={this.handleInput} handleSubmit={this.handleSubmit} value={this.state} />
        </Container>
      </div>
    )
  }

}

export default Contact;
