import React from "react";
import { Link } from 'react-router-dom';

const ScholarshipCard = ({
  scholarshipID,
  scholarshipName,
  companyName,
  image,
  url,
  description,
  howToApply,
  eligibility,
  applicationPeriod,
  amount }) => (
  <div className="row" style={{padding: "20px"}}>
    <div className="col-md-7">
      {/* This is where links to the company page will go */}
      <img className="img-fluid rounded mb-2 mb-md-0" src={ image } />
    </div>
    <div className="col-md-5">
      <h3>{ scholarshipName }</h3>
      <p>{ description }</p>
      <h4>Award Amount:</h4>
      <p>{ amount }</p>
      <br />
      <h4>How To Apply:</h4>
      <p>{ howToApply }</p>
      <h4>Eligibility:</h4>
      <p>{ eligibility }</p>
      <h4>Application Period:</h4>
      <p>{ applicationPeriod }</p>
      {/*Placeholder button to forward to future form*/}
      <button className="btn btn-primary">Apply Now
        <span className="glyphicon glyphicon-chevron-right"></span>
      </button>
      {
        // <Link className="btn btn-primary" to={ url }>Apply Now
        //   <span className="glyphicon glyphicon-chevron-right"></span>
        // </Link>
      }
    </div>
  </div>
);

export default ScholarshipCard;
