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
      <img className="img-fluid rounded mb-2 mb-md-0" src={ image } alt="something"/>
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
      {/*{
        <Button className="btn btn-primary">
            <Link to={`/scholarship/${companyName}/${scholarshipName}/${scholarshipID}/apply`} Apply Now </Button>
        </button>
      }*/}
      {
        // NOTE: Enabling this is breaking the styles on various pages:
        <Link className="btn btn-primary" to={`/scholarship/${companyName}/${scholarshipName}/${scholarshipID}/apply`}>Apply Now
          <span className="glyphicon glyphicon-chevron-right"></span>
        </Link>
      }
    </div>
  </div>
);

export default ScholarshipCard;
