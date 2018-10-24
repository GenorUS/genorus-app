import React, { Component } from "react";
import NavBar from '../NavBar';
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import DBAPI from '../../utils/DBAPI';
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import { OL, OrderedItem } from '../../components/HomeComponents/OrderedList';

class ApplicationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "firstname": "",
        "lastname": "",
        "address": "",
        "address2": "",
        "city": "",
        "state": "",
        "zipcode": "",
        "dob_month": "",
        "dob_day": "",
        "dob_year": "",
        "gender": "",
        "ethnicity": "",
        "gpa": "",
        "sat_score": "",
        "act_score": "",
        "essay": "",

    scholarship: {},
    company: {}
  }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleInput(e) {
    // console.log(e.currentTarget);
    console.log(this.state);
    let { name, value } = e.currentTarget;
    // console.log(name, value);
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  componentDidMount() {
    console.log(this.state.form)
    // console.log(this.props.match.params.company)
    // console.log(this.props.match.params.scholarshipid)
    DBAPI.getScholarships(this.props.match.params.scholarshipid)
     .then(data => {
       // console.log(data);
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
          handleInput={this.handleInput}
          value={this.state}
        />

        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default ApplicationPage;
