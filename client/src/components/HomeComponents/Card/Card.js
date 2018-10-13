import React from "react";


const Card = ({git, img, name, job}) => {
    return (
        <div className="col-lg-4 mb-4">
        <div className="card h-100 text-center">
          <img className="card-img-top" src={img} alt={name} />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{job}</h6>
            <p className="card-text">Click The Link Below To View Development Portfolio.</p>
          </div>
          <div className="card-footer">
            <a href={git} target="blank">{name} Dev.</a>
          </div>
        </div>
      </div>
    );
}

export default Card;