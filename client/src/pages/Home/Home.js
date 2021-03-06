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
      <div style={{backgroundImage: `url(/assets/images/backgrounds/genorusbackground.jpg)`, backgroundColor: "#176734", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundAttachment:"fixed", webkitBackgroundSize: "cover", mozBackgroundSize: "cover", oBackgroundSize: "cover", backgroundSize: "cover" }}>
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
              <div className="box">
  <div className="inner " style={{alignItems: "center", justifyContent: "center"}}>
    
    <span>What We Do</span>
  </div>
  <div className="inner">
  <span>Who We Are</span>
  </div>
</div>
              <p>Genorus was founded in 2018 by Andrew Hojnowski, Britney Aronson, 
                Fraser Torning, and Zach Wiest. Genorus is a scholarship 
                management solution for companies <br></br>and individuals.</p>
              <p>By providing a web portal for applicants, a client dashboard to 
                select recipients and track activity, and school data resources 
                to aid in criteria, validation and summary statistics, Genorus provides 
                a single solution to the challenges inherent to creating<br></br> and 
                managing scholarship offerings.
              </p>
              <p>Our mission is to remove administrative and technical barriers so 
                our clients can focus on what matters: helping people realize their dreams.
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