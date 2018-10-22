import React, { Component } from "react";
import NavBar from '../NavBar';
import ScholarshipCard from "../../components/ScholarshipCard";
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import scholarships from "./data.js";
import { Amazon, ATT, BP, Comcast, Google } from "../../data/scholarships";
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';

class CompanyPages extends Component {
  state = {
    scholarships
  };

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

        {
          this.state.scholarships.map(scholarships => (
            <ScholarshipCard
              id={scholarships.id}
              key={scholarships.id.toString()}
              scholarshipName={scholarships.scholarship_name}
              companyName={scholarships.company_name}
              image={scholarships.image}
              howToApply={scholarships.how_to_apply}
              eligibility={scholarships.eligibility}
              amount={scholarships.amount}
              applicationPeriod={scholarships.application_period}
              description={scholarships.description}
              url={scholarships.url}
            />
          ))
        }

        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default CompanyPages;
