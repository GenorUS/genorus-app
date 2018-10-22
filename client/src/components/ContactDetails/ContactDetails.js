import React from "react";

const ContactDetails = (props) => (
  <div className="row">
    <div className="col-lg-8 mb-4">
      <iframe title="map" width="100%" height="400px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
    </div>
    <div className="col-lg-4 mb-4" style={{backgroundColor: "#fff", height: "400px", borderRadius: "5px", color: "#176734" }}> 
      <h3>Contact Details</h3>
      <p style={{color: "#176734" }}>
        3481 Melrose Place
        <br />Beverly Hills, CA 90210
        <br />
      </p>
<<<<<<< HEAD
      <p style={{color: "#176734" }}>
        <abbr title  ="Phone">P</abbr>: (123) 456-7890
      </p>
      <p style={{color: "#176734" }}>
        <abbr title="Email">E</abbr>:
        <a href="mailto:name@example.com">name@example.com
        </a>
      </p>
      <p style={{color: "#176734" }}>
        <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
=======
      <p>
        <abbr title="Phone">P</abbr> : (123) 456-7890
      </p>
      <p>
        <abbr title="Email">E</abbr> :
        <a href="mailto:name@example.com">name@example.com
        </a>
      </p>
      <p>
        <abbr title="Hours">H</abbr> : Monday - Friday: 9:00 AM to 5:00 PM
>>>>>>> master
      </p>
    </div>
  </div>
);

export default ContactDetails;
