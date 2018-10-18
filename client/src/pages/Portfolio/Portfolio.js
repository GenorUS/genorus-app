import React, { Component } from "react";
import NavBar from '../NavBar';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import H1 from '../../components/HomeComponents/H1';
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
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
        <PageHeading name={"Genorus Scholarships"}/>
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
