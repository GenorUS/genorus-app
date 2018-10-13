import React, { Component } from "react";

const PortfolioCard = ({ id, name, alt, image, description, survey }) => (
  <div className="row" style={{padding: "20px"}}>
    <div className="col-md-7">
      <a href="#">
        <img className="img-fluid rounded mb-3 mb-md-0" src={ image } alt={ alt } />
      </a>
    </div>
    <div className="col-md-5">
      <h3>{ name }</h3>
      <p>{ description }</p>
      <a className="btn btn-primary" href={ survey }>Fill Out Form
        <span className="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div>
  </div>
);

export default PortfolioCard;
