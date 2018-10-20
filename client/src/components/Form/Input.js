"use strict";

import React from "react";




export const Input = ({name, label, placeholder, ref, value, error, onChange}) => {
    let wrapperClass = 'form-group';
    if (error && error.length > 0) {
      wrapperClass += " " + 'has-error';
    }
    
    return (
     <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <input type="text"
            name={name}
            className="form-control"
            placeholder={placeholder}
            ref={name}
            value={value}
            onChange={onChange} />
          <div className="input">{error}</div>
        </div>
      </div>
    );
  
};
