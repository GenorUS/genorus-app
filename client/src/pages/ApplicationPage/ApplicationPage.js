import React, { Component } from "react";
import NavBar from '../NavBar';
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import scholarships from "../../data/scholarships";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';

class ApplicationPage extends Component {
  state = {
    currentScholarship: {}
  };

  componentDidMount() {
    console.log(this.props.match.params.company)
    let company = this.props.match.params.company;
    for (let i = 0; i < scholarships.length; i++) {
      if (scholarships[i].company_name === company) {
        console.log(scholarships[i])
        this.setState({
          currentScholarship: scholarships[i]
        });
      }
    }
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
    console.log(this.state)
  }

  render() {
    return (
      <div style={{backgroundImage: `url(/assets/images/backgrounds/genorusscholarshipsbackground.jpg)`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <NavBar />
        <HomeContainer>
        <PageHeading name={"Genorus Scholarships"}/>
        <OL>
          <OrderedItem className="breadcrumb-item">Genorus</OrderedItem>
          <OrderedItem className="breadcrumb-item active">Genorus Scholarships</OrderedItem>
        </OL>

        <ApplicationForm handleInput={this.handleInput} handleSubmit={this.handleSubmit} value={this.state} scholarshipName={this.state.currentScholarship.scholarship_name} />

        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default ApplicationPage;
