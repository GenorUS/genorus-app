import React, { Component } from "react";
import NavBar from '../NavBar';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import PortfolioCard from "../../components/PortfolioCard";
import sponsors from "./data.js";

class Portfolio extends Component {
  state = {
    sponsors
  };

  render() {
    return (
      <div style={{background: "linear-gradient(to right, #0e0f0e 0%, #13531e 100%)", backgroundColor: "#176734"}}>
        <NavBar />
        <Container>
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
        </Container>
      </div>
    )
  }

}

export default Portfolio;
