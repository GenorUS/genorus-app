import React from "react";
import { Link } from 'react-router-dom';

const ScholarshipCard = ({
  id,
  scholarship_name,
  company_name,
  image,
  url,
  description,
  how_to_apply,
  eligibility,
  application_period,
  amount }) => (
  <div className="row" style={{padding: "20px"}}>
    <div className="col-md-7">
      {/* This is where links to the company page will go */}
      <Link to={`/company/${name}`} >
        <img className="img-fluid rounded mb-2 mb-md-0" src={ image } />
      </Link>
    </div>
    <div className="col-md-5">
      <h3>{ scholarship_name } by { company_name }</h3>
      <p>{ description }</p>
      <h4>Award Amount:</h4>
      <p>{ amount }</p>
      <br />
      <h4>How To Apply:</h4>
      <p>{ how_to_apply }</p>
      <h4>Eligibility:</h4>
      <p>{ eligibility }</p>
      <h4>Application Period:</h4>
      <p>{ application_period }</p>
      <Link className="btn btn-primary" to={ url }>Apply Now
        <span className="glyphicon glyphicon-chevron-right"></span>
      </Link>
    </div>
  </div>
);

export default ScholarshipCard;
