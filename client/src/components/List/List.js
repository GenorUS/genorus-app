import React from "react";


export const List = (props) => {
  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        {props.children}
      </ul>
    </div>
  );
};
