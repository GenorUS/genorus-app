import React from "react";


const ScholarshipForm = ({handleInput, handleSubmit, value, scholarshipName}) => (
  <div className="row">
    <div className="col-lg-8 mb-4">
      <h3>Apply for the { scholarshipName }</h3>
      <form name="sentMessage" id="contactForm" noValidate>
        <div className="control-group form-group">
          <div className="controls">
            <label>First Name:</label>
            <input name="name" value={value.name} onChange={handleInput} type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
            <p className="help-block"></p>
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Last Name:</label>
            <input name="name" value={value.name} onChange={handleInput} type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
            <p className="help-block"></p>
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Date of Birth:</label>
            <input name="phone" value={value.phone} onChange={handleInput} type="number" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Address:</label>
            <input name="email" value={value.email} onChange={handleInput} type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Gender:</label>
            <input name="email" value={value.email} onChange={handleInput} type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Ethnicity:</label>
            <input name="email" value={value.email} onChange={handleInput} type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>GPA:</label>
            <input name="email" value={value.email} onChange={handleInput} type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>SAT Score:</label>
            <input name="email" value={value.email} onChange={handleInput} type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>ACT Score:</label>
            <input name="email" value={value.email} onChange={handleInput} type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Short Essay:</label>
            <textarea name="message" value={value.message} onChange={handleInput} rows="10" cols="100" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength="500" style={{resize: "none"}} />
          </div>
        </div>
        <div id="success"></div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
      </form>
    </div>
  </div>
);

export default ScholarshipForm;
