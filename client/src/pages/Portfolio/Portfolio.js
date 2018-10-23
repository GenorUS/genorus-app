import React, { Component } from "react";
import NavBar from '../NavBar';
import PortfolioCard from "../../components/PortfolioCard";
import HomeContainer from "../../components/HomeComponents/HomeContainer";
import PageHeading from "../../components/PageHeading";
import Footer from "../Footer";
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';
import DBAPI from '../../utils/DBAPI';

class Portfolio extends Component {
  state = {
    sponsors: []
  };

  componentDidMount() {
     DBAPI.getAllCompanies()
      .then(data => {
        console.log(data.data[0].Scholarships[0].id)
        let recieved = data.data
        this.setState({sponsors: recieved});
        this.state.sponsors.map(sponsors => console.log(sponsors.id, sponsors.company_name,
           sponsors.Scholarships[0].name, sponsors.Scholarships[0].id, sponsors.Scholarships[0].bannerURL));
      });
  }

  render() {
    const description = "Click on the fill out form button below to view the scholarship requirements. Please fill out the form for a chance at recieving a scholarship from the designated sponsor.";
    return (
      <div style={{backgroundImage: `url(/assets/images/backgrounds/genorusscholarshipsbackground.jpg)`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment:"fixed", webkitBackgroundSize: "cover", mozBackgroundSize: "cover", oBackgroundSize: "cover", backgroundSize: "cover" }}>
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
                name={sponsors.company_name}
                alt={sponsors.Scholarships[0].name}
                scholID={sponsors.Scholarships[0].id}
                image={sponsors.Scholarships[0].bannerURL}
                description={description}
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
