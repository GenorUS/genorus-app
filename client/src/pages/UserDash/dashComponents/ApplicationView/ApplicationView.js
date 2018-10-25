import React, { Component } from "react";
import NavBar from '../../../NavBar';
import HomeContainer from "../../../../components/HomeComponents/HomeContainer";
import PageHeading from "../../../../components/PageHeading";
import Footer from "../../../Footer";
import DBAPI from '../../../../utils/DBAPI';
import ApplicationForm from "./Form/Form";
import { OL, OrderedItem } from '../../../../components/HomeComponents/OrderedList';
import JWT from '../../../../utils/Auth';

class ApplicationView extends Component {
  constructor(props) {
    super(props);
    this.state = {

    formData: {},
    scholarship: {},

    user: JWT.getJWT() || {}
  };
  };






  componentWillMount() {

    console.log(this.props.match.params.appID);
    DBAPI.getApplication(this.props.match.params.appID)
        .then(data => {
            let app = data.data;
            let scholarship = data.data.Scholarship
            console.log("APP ", app);
            this.setState({formData: app, scholarship: scholarship})
        });
  }

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
            {this.state.user ? <div className="btn btn-danger">{this.state.user.firstname}</div> : null}
        <ApplicationForm
          info={this.state.formData}
          scholar={this.state.scholarship}
        />

        </HomeContainer>
        <Footer />
      </div>
    )
  }

}

export default ApplicationView;
