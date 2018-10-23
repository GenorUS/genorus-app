import React from "react";

export const Input = props => {
  return (
    <div className="form-group" style={{paddingRight: "30px", marginRight: "15%"}}>
      <div>{props.label}</div>
      <input {...props} />
    </div>
  )
};
