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
import Sponsors from '../../utils/sponsors.json';



class Home extends Component {
  
  render() {
    return (
      <div style={{backgroundImage: `url(/assets/images/backgrounds/genorusbackground.jpg)`, backgroundColor: "#176734" }}>
        <NavBar />
        <HomeContainer>
        <section id="nextgroup" style={{paddingTop: "70px", paddingBottom: "70px"}}>
        <div id="ui">
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          <H1 className="mb-3" style={{color:"#fff"}} about="About Genorus" />
          </div>
      </section>
         
 
          <OL>
            <OrderedItem className ="breadcrumb-item">Genorus</OrderedItem>
            <OrderedItem className="breadcrumb-item active">About Genorus</OrderedItem>
          </OL>
          <Div className="row">
            <Div className="col-lg-6">
              <Img className="img-fluid rounded mb-4" src="../../../assets/images/logospins/biglogospin.gif" alt="biggenoruslogospin" />
            </Div>
            <Div  className="col-lg-6" style={{color: "#fff"}}>
            
              {/* <h2>Who We Are & What We Do</h2> */}
              <div class="box">
  <div className="inner " style={{alignItems: "center", justifyContent: "center"}}>
    
    <span>What We Do</span>
  </div>
  <div className="inner">
  <span>Who We Are</span>
  </div>
</div>
              <p>Genorus was founded in 2018 by Andrew Hojnowski, Britney Aronson, Fraser Torning, and Zach Wiest. Genorus stands 
                for Giving Everyone Necessities Openly Redistributed Upon Scholars. </p>
              <p>Genorus is a scholarship management application that hosts a variety of different companies. These companies
                are donating graciously to give scholars a chance to create a
                better tomorrow then the yesterday that was left behind. 
              </p>
              <p>Each student applying for the scholarship must meet the requirements that the sponsor has set. To apply for
                a scholarship, navigate to the Genorus Scholarships
                tab and see which forms match your criteria.
              </p>
            </Div>
          </Div>
          <Cont devs={devs} />
          <h2 style={{color: "white"}}>Our Current Scholarship Donors</h2>
          <Div className="row">
            {Sponsors.map((a, i) => {
              return(
                <Div key={i} className="col-lg-2 col-sm-4 mb-4">
                  <Img className="img-fluid" src={a.img} alt={a.alt} key={i} />
                </Div>
              );
            })}
          </Div>
        </HomeContainer>
        <Footer />
      </div>

      
    );
  }
}

export default Home;