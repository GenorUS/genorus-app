import React, { Component } from "react";
import NavBar from '../NavBar';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Footer from '../Footer';
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import PageHeading from "../../components/PageHeading";
import ContactForm from "../../components/ContactForm";
import ContactDetails from "../../components/ContactDetails";
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';

class Contact extends Component {

  render() {
    return (
      <div style={{backgroundImage: `url(/assets/images/backgrounds/contactusbackground.jpg)`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <NavBar />
        <Container>
          <PageHeading name={"Contact Genorus"} />
          <OL>
            <OrderedItem className="breadcrumb-item">Genorus</OrderedItem>
            <OrderedItem className="breadcrumb-item active">Contact Us</OrderedItem>
          </OL>
          <ContactDetails />
          <ContactForm />
        </Container>
        <Footer />
      </div>
    )
  }

}

export default Contact;
