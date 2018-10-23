import React from "react";


const ScholarshipForm = ({handleInput, handleSubmit, value, scholarshipName}) => (
  <div className="row">
    <div className="col-lg-10 mb-4">
      <h3>Apply for the { scholarshipName }</h3>
      <form name="application" id="contactForm" noValidate>

        {/*Demographic Dataset*/}
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">First Name:</label>
            <input type="firstname" class="form-control" id="inputEmail4" placeholder="First Name" />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Last Name:</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Last Name" />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>Pennsylvania</option>
              <option>Connecticut</option>
              <option>Minnesota</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>

        {/*Date of Birth Selection*/}
        <div className="control-group form-group">
          <div className="controls form-row">
              <div class="form-group col-md-2">
                <label for="inputState">Birth Month</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputState">Birth Day</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputState">Birth Year</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
          </div>
        </div>


        {/*Gender fieldset below*/}
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Gender:</legend>
            <div class="col-sm-10">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Male" />
                <label class="form-check-label" for="gridRadios1">
                  Male
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Female" />
                <label class="form-check-label" for="gridRadios2">
                  Female
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="Non-Binary" />
                <label class="form-check-label" for="gridRadios3">
                  Non-binary
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="No Answer" />
                <label class="form-check-label" for="gridRadios3">
                  Prefer not to say
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        {/*Ethnicity fieldset below*/}
        <fieldset class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Ethnicity:</legend>
            <div class="col-sm-10">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="African-American" />
                <label class="form-check-label" for="gridRadios1">
                  African-American
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Caucasion" />
                <label class="form-check-label" for="gridRadios2">
                  Caucasian
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="Asian American" />
                <label class="form-check-label" for="gridRadios3">
                  Asian-American
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="Hispanic or Latin-American" />
                <label class="form-check-label" for="gridRadios3">
                  Hispanic or Latin-American
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="Pacific-Islander" />
                <label class="form-check-label" for="gridRadios3">
                  Pacific-Islander
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="Two or More Races" />
                <label class="form-check-label" for="gridRadios3">
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
            <input name="gpa" value={value.gpa} onChange={handleInput} type="number" className="form-control" id="gpa" required data-validation-required-message="Please enter your GPA." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>SAT Score:</label>
            <input name="sat_score" value={value.satScore} onChange={handleInput} type="number" className="form-control" id="sat_score" required data-validation-required-message="Please enter your SAT Score." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>ACT Score:</label>
            <input name="act_score" value={value.actScore} onChange={handleInput} type="number" className="form-control" id="act_score" required data-validation-required-message="Please enter your ACT Score." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Short Essay:</label>
            <textarea name="message" value={value.message} onChange={handleInput} rows="10" cols="100" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength="500" style={{resize: "none"}} />
          </div>
        </div>
        <div id="success"></div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary" id="sendMessageButton">Submit Application</button>
      </form>
    </div>
  </div>

);

export default ScholarshipForm;
