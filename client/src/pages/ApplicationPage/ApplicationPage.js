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

    scholarship: {},
    company: {},
    user: {}
  }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  componentWillMount() {

      this.setState({user: JWT.getJWT()});



    DBAPI.getScholarships()
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          if(err.response.status){
            console.log(err.response.status)
          }
        });

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

  handleInput(e) {
    let { name, value } = e.currentTarget;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    let application = {
      ...this.state
    }
    DBAPI.submitApplication(application)
      .then(data => {
        console.log(data);
    })
  }

  componentDidMount() {
    console.log(this.state.form)
    DBAPI.getScholarships(this.props.match.params.scholarshipid)
     .then(data => {
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
            {this.state.user && <div > {this.state.user.id}</div>}
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
