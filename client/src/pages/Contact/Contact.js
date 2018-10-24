import React, { Component } from "react";
import NavBar from '../NavBar';
import Footer from '../Footer';
import Container from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import ContactForm from "../../components/ContactForm";
import ContactDetails from "../../components/ContactDetails";
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';

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
      <div style={{backgroundImage: `url(/assets/images/backgrounds/contactusbackground.jpg)`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment:"fixed", webkitBackgroundSize: "cover", mozBackgroundSize: "cover", oBackgroundSize: "cover", backgroundSize: "cover" }}>
        <NavBar />
        <Container>
          <PageHeading name={"Contact Genorus"} />
          <OL>
            <OrderedItem className="breadcrumb-item">Genorus</OrderedItem>
            <OrderedItem className="breadcrumb-item active">Contact Us</OrderedItem>
          </OL>
          <ContactDetails />
          <ContactForm
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            value={this.state}
          />
        </Container>
        <Footer />
      </div>
    )
  }

}

export default Contact;
