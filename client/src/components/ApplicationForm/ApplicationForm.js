import React from "react";


const ScholarshipForm = ({ handleSubmit, handleInput, value, scholarshipName}) => (
  <div className="row">
    <div className="col-lg-10 mb-4">
      <h3>Apply for the { scholarshipName }</h3>
      <form name="application" id="contactForm" noValidate>

        {/*Demographic Dataset*/}
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name:</label>
            <input type="firstname" className="form-control" id="firstname" value={value.firstname} onChange={handleInput} placeholder="First Name" />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name:</label>
            <input type="lastname" className="form-control" id="lastname" value={value.lastname} onChange={handleInput} placeholder="Last Name" />
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input type="text" className="form-control" id="address" value={value.address} onChange={handleInput} placeholder="1234 Main St" />
        </div>
        <div className="form-group">
          <label>Address 2</label>
          <input type="text" className="form-control" id="address2" value={value.address2} onChange={handleInput} placeholder="Apartment, studio, or floor" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City</label>
            <input type="text" className="form-control" id="city" value={value.city} onChange={handleInput}/>
          </div>
          <div className="form-group col-md-4">
            <label>State</label>
            <select id="inputState" className="form-control">
              <option>Choose...</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Minnesota">Minnesota</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label>Zip</label>
            <input type="text" className="form-control" id="zipcode" />
          </div>
        </div>

        {/*Date of Birth Selection*/}
        <div className="control-group form-group">
          <div className="controls form-row">
              <div className="form-group col-md-2">
                <label>Birth Month</label>
                <select id="inputState" className="form-control">
                  <option value="none chosen">Choose...</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label>Birth Day</label>
                <select id="inputState" className="form-control">
                  <option value="none chosen">Choose...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label>Birth Year</label>
                <select id="inputState" className="form-control">
                  <option>Choose...</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                </select>
              </div>
          </div>
        </div>


        {/*Gender fieldset below*/}
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Gender:</legend>
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gridRadios" id="gender" value="Male" />
                <label className="form-check-label">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gridRadios" id="gender" value="Female" />
                <label className="form-check-label">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gridRadios" id="gender" value="Non-Binary" />
                <label className="form-check-label">
                  Non-binary
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gridRadios" id="gender" value="No Answer" />
                <label className="form-check-label">
                  Prefer not to say
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        {/*Ethnicity fieldset below*/}
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Ethnicity:</legend>
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gridRadios" id="african_american" value="African-American" />
                <label className="form-check-label">
                  African-American
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gridRadios" id="caucasian" value="Caucasian" />
                <label className="form-check-label">
                  Caucasian
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gridRadios" id="asian_american" value="Asian American" />
                <label className="form-check-label">
                  Asian-American
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gridRadios" id="hispanic" value="Hispanic or Latin-American" />
                <label className="form-check-label">
                  Hispanic or Latin-American
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gridRadios" id="pacific_islander" value="Pacific-Islander" />
                <label className="form-check-label">
                  Pacific-Islander
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gridRadios" id="two_or_more_races" value="Two or More Races" />
                <label className="form-check-label">
                  Two or More Races
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        {/*Grade and Essay Requirements Below*/}
        <div className="control-group form-group">
          <div className="controls">
            <label>GPA:</label>
            <input name="gpa" type="number" className="form-control" id="gpa" value={value.gpa} onChange={handleInput} required data-validation-required-message="Please enter your GPA." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>SAT Score:</label>
            <input name="sat_score" type="number" className="form-control" id="sat_score" value={value.sat_score} onChange={handleInput} required data-validation-required-message="Please enter your SAT Score." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>ACT Score:</label>
            <input name="act_score" type="number" className="form-control" id="act_score" value={value.act_score} onChange={handleInput} required data-validation-required-message="Please enter your ACT Score." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Short Essay:</label>
            <textarea name="essay" type="text" rows="10" cols="100" className="form-control" id="essay" value={value.essay} onChange={handleInput} required data-validation-required-message="Please enter your message" maxLength="500" style={{resize: "none"}} />
          </div>
        </div>
        <div id="success"></div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary" id="submitApplication">Submit Application</button>
      </form>
    </div>
  </div>

);

export default ScholarshipForm;
