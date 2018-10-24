import React, { Component } from "react";
import NavBar from '../NavBar';
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import DBAPI from '../../utils/DBAPI';
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import { OL, OrderedItem } from '../../components/HomeComponents/OrderedList';

class ApplicationPage extends Component {
  state = {
    scholarship: {},
    company: {}
  };

  componentDidMount() {
    console.log(this.props.match.params.company)
    console.log(this.props.match.params.scholarshipid)
    DBAPI.getScholarships(this.props.match.params.scholarshipid)
     .then(data => {
       console.log(data);
       let scholarship = data.data.Scholarships;
       let company = data.data.company_name;
       this.setState({ company, scholarship: scholarship[0] });
     });
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

        <ApplicationForm handleInput={this.handleInput} handleSubmit={this.handleSubmit} value={this.state} scholarshipName={this.state.scholarship.name} />

        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default ApplicationPage;
