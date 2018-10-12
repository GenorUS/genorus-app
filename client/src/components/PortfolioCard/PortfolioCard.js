import React, { Component } from "react";
import './PortfolioCard.css';

const PortfolioCard = ({ id, name, alt, image, description, survey }) => (
  <div className="row customCard">
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
