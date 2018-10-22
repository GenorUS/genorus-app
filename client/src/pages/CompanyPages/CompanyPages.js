import React, { Component } from "react";
import NavBar from '../NavBar';
import ScholarshipCard from "../../components/ScholarshipCard";
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import scholarships from "./data.js";
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
          // Insert logic here to build out the page
        }

        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default CompanyPages;
