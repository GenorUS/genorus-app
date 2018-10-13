import React, { Component } from "react";
import './ContactDetails.css';

const ContactDetails = (props) => (
  <div className="row">
    <div className="col-lg-8 mb-4">
      <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
    </div>
    <div className="col-lg-4 mb-4">
      <h3>Contact Details</h3>
      <p>
        3481 Melrose Place
        <br />Beverly Hills, CA 90210
        <br />
      </p>
      <p>
        <abbr title="Phone">P</abbr>: (123) 456-7890
      </p>
      <p>
        <abbr title="Email">E</abbr>:
        <a href="mailto:name@example.com">name@example.com
        </a>
      </p>
      <p>
        <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
      </p>
    </div>
  </div>
);

export default ContactDetails;
