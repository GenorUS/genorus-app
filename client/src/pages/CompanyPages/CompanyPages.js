import React, { Component } from "react";
import NavBar from '../NavBar';
import ScholarshipCard from "../../components/ScholarshipCard";
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';
import DBAPI from '../../utils/DBAPI';
import JWT from '../../utils/Auth';

class CompanyPages extends Component {
  
  state = {
    company: {},
    scholarship: {},
    user: JWT.getJWT() || {}
  };


  componentDidMount() {
    DBAPI.getScholarships(this.props.match.params.companyid)
     .then(data => {
       let scholarship = data.data.Scholarships;
       let company = data.data
       this.setState({ company, scholarship: scholarship[0] });
     });
 }

  render() {
    let { company_name } = this.state.company;
    let {  id, name, amount, description, bannerURL } = this.state.scholarship;
    let howToApply = "Fill out general information on our form, Upload a copy of your transcripts. Supply a letter of recommendation."
    let eligibility= "Applicants must have at least a 3.0 GPA or higher. Applicants must be a graduating high school senior from Pennsylvania." +
                  "Applicants must be university students studying computer science, computer engineering, informatics, or a closely related technical field at a university in the state of Pennsylvania" +
                  "Applicants must be 18 year of age or older as of 17th September 2018." + 
                  "Applicants must come from a household with a median income of $35,000 or lower.";
    let applicationPeriod = "The application process will remain open until 6th December, 2018 at 11:59 pm GMT."
    return (
      <div style={{backgroundImage: `url(/assets/images/backgrounds/genorusscholarshipsbackground.jpg)`, backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <NavBar />
        <HomeContainer>
        <PageHeading name={"Genorus Scholarships"}/>
        <OL>
          <OrderedItem className="breadcrumb-item">Genorus</OrderedItem>
          <OrderedItem className="breadcrumb-item active">Genorus Scholarships</OrderedItem>
        </OL>

        <ScholarshipCard
          scholarshipID={id}
          companyName={company_name}
          scholarshipName={name}
          image={bannerURL}
          description={description}
         amount={amount}
         howToApply={howToApply}
         eligibility={eligibility}
         applicationPeriod={applicationPeriod}
          userId={this.state.user.id}
        />

     
        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default CompanyPages;
