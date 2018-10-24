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
  amount,
  userId }) => (
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
        {/*// NOTE: Enabling this is breaking the styles on various pages:*/}
        {userId ? <Link className="btn btn-primary" to={`/scholarship/${companyName}/${scholarshipName}/${scholarshipID}/apply`} >Apply Now
          <span className="glyphicon glyphicon-chevron-right"></span>
        </Link> : <div style={{color: "white", fontWeight: "bold", fontSize: "16px", padding: "20px", backgroundColor: "red", textAlign: "center"}}>Please Log In to Apply</div>
      }
    </div>
  </div>
);

export default ScholarshipCard;
