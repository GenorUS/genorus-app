import React, { Component } from "react";
import NavBar from '../NavBar';
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import scholarships from "../../data/scholarships";
import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';
import DBAPI from '../../utils/DBAPI';
import JWT from '../../utils/Auth';

class ApplicationPage extends Component {
  state = {
    currentScholarship: {},
    user: {}
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

  handleInput(event) {
    let { name, value } = event.currentTarget;
    console.log(name + " " + value);
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
      let { id } = this.state.user;
    return (
      <div style={{backgroundImage: `url(/assets/images/backgrounds/genorusscholarshipsbackground.jpg)`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <NavBar />
        <HomeContainer>
            <button className="btn btn-danger">{id}</button>
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
