import React, { Component } from "react";

const ContactForm = (props) => (
  <div className="row">
    <div className="col-lg-8 mb-4">
      <h3>Send us a Message</h3>
      <form name="sentMessage" id="contactForm" novalidate>
        <div className="control-group form-group">
          <div className="controls">
            <label>Full Name:</label>
            <input type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
            <p className="help-block"></p>
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Phone Number:</label>
            <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Email Address:</label>
            <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Message:</label>
            <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Please enter your message" maxlength="999" style={{resize: "none"}}></textarea>
          </div>
        </div>
        <div id="success"></div>
        <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
      </form>
    </div>
  </div>
);

export default ContactForm;
