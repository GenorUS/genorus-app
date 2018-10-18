import React, { Component } from "react";
import NavBar from '../NavBar';
import Footer from '../Footer';
import PortfolioCard from "../../components/PortfolioCard";
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import sponsors from "./data.js";

class Portfolio extends Component {
  state = {
    sponsors
  };

  render() {
    return (
      <div style={{background: "linear-gradient(to right, #0e0f0e 0%, #13531e 100%)", backgroundColor: "#176734"}}>
        <NavBar />
        <HomeContainer>
        <PageHeading name={"GenorUs Scholarships"}/>
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
