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
    form: {
      firstname: "",
      lastname: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zipcode: "",
      dateofbirth: {
        month: "",
        day: "",
        year: ""
      },
      gender: "",
      ethnicity: "",
      gpa: "",
      sat: "",
      act: "",
      essay: ""
    },

    scholarship: {},
    company: {}
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.form);
  }

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

        <ApplicationForm
          scholarshipName={this.state.scholarship.name}
          handleSubmit={this.handleSubmit}
          value={this.state.form}
        />

        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default ApplicationPage;
