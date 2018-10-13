import React, { Component } from "react";
import NavBar from '../NavBar';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import PageHeading from "../../components/PageHeading";
import ContactForm from "../../components/ContactForm";
import ContactDetails from "../../components/ContactDetails";

class Contact extends Component {

  render() {
    return (
      <div style={{background: "linear-gradient(to right, #0e0f0e 0%, #13531e 100%)", backgroundColor: "#176734"}}>
        <NavBar />
        <Container>
          <PageHeading />
          <ContactDetails />
          <ContactForm />
        </Container>
      </div>
    )
  }

}

export default Contact;
