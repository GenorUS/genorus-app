import React from "react";
import { Link } from 'react-router-dom';

const PortfolioCard = ({ id, name, scholID, alt, image, description, survey, url }) => (
  <div className="row" style={{padding: "20px"}}>
    <div className="col-md-7">
      {/* This is where links to the company page will go */}
      <Link to={`/scholarship/${scholID}`}>
        <img className="img-fluid rounded mb-2 mb-md-0" src={ image } alt={ alt } />
      </Link>
    </div>
    <div className="col-md-5">
      <h3 className="sponsorwave">{ name }</h3>
      <p>{ description }</p>
      <Link className="btn btn-primary" to={`/scholarship/${name}/${id}`}>Learn More
        <span className="glyphicon glyphicon-chevron-right"></span>
      </Link>
    </div>
  </div>
);

export default PortfolioCard;
