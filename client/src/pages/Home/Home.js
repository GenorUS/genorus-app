import React, { Component } from "react";
import NavBar from '../NavBar';
import HomeContainer from '../../components/HomeComponents/HomeContainer';
import H1 from '../../components/HomeComponents/H1';
import {OL, OrderedItem} from '../../components/HomeComponents/OrderedList';
import Div from '../../components/HomeComponents/DIV';
import Img from '../../components/HomeComponents/Img';
import {Cont} from '../../components/HomeComponents/Card';
import Footer from '../Footer';
import devs from '../../utils/devs.json';
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
  
  render() {
    return (
      <div>
        <NavBar />
        <HomeContainer>
          <H1 className="mt-4 mb-3" style={{color:"black"}} about="About Genorus" />
          <OL>
            <OrderedItem className="breadcrumb-item">About Genorus</OrderedItem>
            <OrderedItem className="breadcrumb-item active">About Genorus</OrderedItem>
          </OL>
          <Div className="row">
            <Div className="col-lg-6">
              <Img className="img-fluid rounded mb-4" src="http://placehold.it/750x450" alt="Temp" />
            </Div>
            <Div  className="col-lg-6">
              <h2>Who We Are & What We Do</h2>
              <p style={{color: "black"}}>Genorus was founded in 2018 by Andrew Hojnowski, Britney Aronson, Fraser Torning, and Zach Wiest. Genorusstands 
                for Giving Everyone Necessities Openly Redistributed Upon Scholars. </p>
              <p style={{color: "black"}}>Genorus is a scholarship management application that hosts a variety of different companies. These companies
                are donating graciously to give scholars a chance to create a
                better tomorrow then the yesterday that was left behind. It only takes one person to change the world and we
                want to give people an equal opportunity at learning to
                become who they truly are.
              </p>
              <p style={{color: "black"}}>Each student applying for the scholarship must meet the requirements that the sponsor has set. To apply for
                a scholarship, navigate to the Genorus Scholarships
                tab and see which forms match your criteria.
              </p>
            </Div>
          </Div>
          <Cont devs={devs} />
        </HomeContainer>
        <Footer />
      </div>
    );
  }
}

export default Home;