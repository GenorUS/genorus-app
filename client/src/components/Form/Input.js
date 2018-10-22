"use strict";

import React from "react";




export const Input = ({name, label, placeholder, value, onChange}) => {
    let wrapperClass = 'form-group';


    
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
        </div>
      </div>
    );
  
};
