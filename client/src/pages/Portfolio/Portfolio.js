import React, { Component } from "react";
import NavBar from '../NavBar';
import PortfolioCard from "../../components/PortfolioCard";
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import sponsors from "./data.js";
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';

class Portfolio extends Component {
  state = {
    sponsors
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
            this.state.sponsors.map(sponsors => (
              <PortfolioCard
                id={sponsors.id}
                key={sponsors.id.toString()}
                name={sponsors.name}
                alt={sponsors.alt}
                image={sponsors.image}
                survey={sponsors.survey}
                description={sponsors.description}
                url={sponsors.url}
              />
            ))
          }
        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default Portfolio;
