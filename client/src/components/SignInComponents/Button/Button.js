import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Button = props => (
  <button {...props}>{props.children}</button>
);

export default Button;
