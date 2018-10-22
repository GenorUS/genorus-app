import React, { Component } from "react";
import NavBar from '../NavBar';
import ScholarshipCard from "../../components/ScholarshipCard";
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import scholarships from "../../data/scholarships";
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';

class CompanyPages extends Component {
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

        <ScholarshipCard
          id={this.state.currentScholarship.id}
          key={this.state.currentScholarship.id}
          scholarshipName={this.state.currentScholarship.scholarship_name}
          companyName={this.state.currentScholarship.company_name}
          image={this.state.currentScholarship.image}
          howToApply={this.state.currentScholarship.how_to_apply}
          eligibility={this.state.currentScholarship.eligibility}
          applicationPeriod={this.state.currentScholarship.application_period}
          amount={this.state.currentScholarship.amount}
          description={this.state.currentScholarship.description}
          url={this.state.currentScholarship.url}
        />

        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default CompanyPages;
