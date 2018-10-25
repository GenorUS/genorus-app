import React, { Component } from "react";
import NavBar from '../NavBar';
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import DBAPI from '../../utils/DBAPI';
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import { OL, OrderedItem } from '../../components/HomeComponents/OrderedList';
import JWT from '../../utils/Auth';

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
        "highSchoolID": "",
        "collegeID": "",

    scholarship: {},
    company: {},
    statesData: [],
    highSchoolData: [],
    collegeData: [],
    user: JWT.getJWT() || {}
  };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.highSchoolData = this.getHighSchoolData.bind(this);
    this.collegeData = this.getCollegeData.bind(this);
  };

  handleInput(e) {
    let { name, value } = e.currentTarget;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let data = this.state;
    let application = {
      firstname: data.firstname,
      lastname: data.lastname,
      address: data.address,
      address2: data.address2,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      dob_month: data.dob_month,
      dob_day: data.dob_day,
      dob_year: data.dob_year,
      gender: data.gender,
      ethnicity: data.ethnicity,
      gpa: data.gpa,
      sat_score: data.sat_score,
      act_score: data.act_score,
      essay: data.essay,
      UserId: data.user.id,
      ScholarshipId: data.scholarship.id,
      company: data.company,
      highSchoolID: data.highSchoolID,
      collegeID: data.collegeID
    }
    console.log(application);
    DBAPI.submitApplication(application)
      .then(data => {
        console.log(data);
    })
  }

  componentWillMount() {
    console.log(this.state.user);
    DBAPI.getScholarships(this.props.match.params.scholarshipid)
     .then(data => {
       let scholarship = data.data.Scholarships;
       let company = data.data.company_name;
       this.setState({ company, scholarship: scholarship[0] });
     });
    DBAPI.getStateData()
      .then(data => {
      this.setState({ statesData: data.data.states });
      console.log(this.state);
    });
  }

  // Takes state and city args applicant
  getHighSchoolData(s, c) {
    DBAPI.getHighSchoolData(s, c)
    .then(data => {
      console.log(data)
    })
  }

  // Takes state and city args from applicant
  getCollegeData(s, c) {
    DBAPI.getCollegeData(s, c)
    .then(data => {
      console.log(data);
    })
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
            {this.state.user ? <div className="btn btn-danger">{this.state.user.firstname}</div> : null}
        <ApplicationForm
          scholarshipName={this.state.scholarship.name}
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
          value={this.state}
          statesData={this.state.statesData}
          getHighSchoolData={this.getHighSchoolData}
          getCollegeData={this.getCollegeData}
          highSchoolData={this.state.highSchoolData}
          collegeData={this.state.collegeData}
        />

        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default ApplicationPage;
