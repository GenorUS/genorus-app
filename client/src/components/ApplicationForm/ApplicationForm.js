import React from "react";

const ScholarshipForm = ({ handleSubmit, handleInput, value, scholarshipName, statesData, getHighSchoolData, getCollegeData, highSchoolData, collegeData }) => (
  <div className="row">
    <div className="col-lg-10 mb-4">
      <h3>Apply for the { scholarshipName }</h3>
      <form name="application" id="contactForm" noValidate>

        {/*Demographic Dataset*/}
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>First Name:</label>
            <input name="firstname" type="text" className="form-control" value={value.firstname} onChange={handleInput} placeholder="First Name" />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name:</label>
            <input name="lastname" type="text" className="form-control" value={value.lastname} onChange={handleInput} placeholder="Last Name" />
          </div>
        </div>
        <div className="form-group">
          <label>Address</label>
          <input name="address" type="text" className="form-control" value={value.address} onChange={handleInput} placeholder="1234 Main St" />
        </div>
        <div className="form-group">
          <label>Address 2</label>
          <input name="address2" type="text" className="form-control" value={value.address2} onChange={handleInput} placeholder="Apartment, studio, or floor" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City</label>
            <input name="city" type="text" className="form-control" value={value.city} onChange={handleInput}/>
          </div>
          <div className="form-group col-md-4">
            <label>State</label>
            <select name="state" value={value.state} onChange={handleInput} className="form-control">
              <option value="none">Choose...</option>
              {
                statesData.map(state => {
                 return <option value={state}>{state}</option>
               })
              }
            </select>
          </div>
          <div className="form-group col-md-2">
            <label>Zip Code</label>
            <input name="zipcode" type="text" className="form-control" value={value.zipcode} onChange={handleInput} />
          </div>
        </div>

        {/*Date of Birth Selection*/}
        <div className="control-group form-group">
          <div className="controls form-row">
              <div className="form-group col-md-2">
                <label>Birth Month</label>
                <select name="dob_month" value={value.dob_month} onChange={handleInput} className="form-control">
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
                <select name="dob_day" value={value.dob_day} onChange={handleInput} className="form-control">
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
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label>Birth Year</label>
                <select name="dob_year" value={value.dob_year} onChange={handleInput} className="form-control">
                  <option>Choose...</option>
                  <option value="1986">1986</option>
                  <option value="1987">1987</option>
                  <option value="1988">1988</option>
                  <option value="1989">1989</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
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
                <input className="form-check-input" type="radio" name="gender" value="Male" onChange={handleInput} />
                <label className="form-check-label">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="Female" onChange={handleInput} />
                <label className="form-check-label">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="Non-Binary" onChange={handleInput} />
                <label className="form-check-label">
                  Non-binary
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" value="No Answer" onChange={handleInput} />
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
                <input className="form-check-input" type="radio" name="ethnicity" value="African-American" onChange={handleInput} />
                <label className="form-check-label">
                  African-American
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="ethnicity" value="Caucasian" onChange={handleInput} />
                <label className="form-check-label">
                  Caucasian
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="ethnicity" value="Asian American" onChange={handleInput} />
                <label className="form-check-label">
                  Asian-American
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="ethnicity" value="Hispanic or Latin-American" onChange={handleInput} />
                <label className="form-check-label">
                  Hispanic or Latin-American
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="ethnicity" value="Pacific-Islander" onChange={handleInput} />
                <label className="form-check-label">
                  Pacific-Islander
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="ethnicity" value="Two or More Races" onChange={handleInput} />
                <label className="form-check-label">
                  Two or More Races
                </label>
              </div>
            </div>
          </div>
        </fieldset>


        {/*School Data Requirements Below*/}
        <div className="control-group form-group">
          <div className="controls form-row">
              <div className="form-group col-md-6">
                <label>High School ID:</label>
                <select name="highSchoolID" value={value.highSchoolID} onChange={handleInput} className="form-control">
                  <option value="none chosen">Choose...</option>
                  {
                    getHighSchoolData(value.state, value.city)
                  }
                  <option value="3858302">Philadelphia High School - 1029472</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label>College ID:</label>
                <select name="collegeID" value={value.collegeID} onChange={handleInput} className="form-control">
                  <option value="none chosen">Choose...</option>
                  {
                    getCollegeData(value.state, value.city)
                  }
                  <option value="4736294">Philadelphia University</option>
                </select>
              </div>
          </div>
        </div>

        {/*Grade and Essay Requirements Below*/}
        <div className="control-group form-group">
          <div className="controls">
            <label>GPA:</label>
            <input name="gpa" type="number" className="form-control" value={value.gpa} onChange={handleInput} required data-validation-required-message="Please enter your GPA." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>SAT Score:</label>
            <input name="sat_score" type="number" className="form-control" value={value.sat_score} onChange={handleInput} required data-validation-required-message="Please enter your SAT Score." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>ACT Score:</label>
            <input name="act_score" type="number" className="form-control" value={value.act_score} onChange={handleInput} required data-validation-required-message="Please enter your ACT Score." />
          </div>
        </div>
        <div className="control-group form-group">
          <div className="controls">
            <label>Short Essay:</label>
            <textarea name="essay" type="text" rows="10" cols="100" className="form-control" value={value.essay} onChange={handleInput} required data-validation-required-message="Please enter your message" maxLength="500" style={{resize: "none"}} />
          </div>
        </div>
        <div id="success"></div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit Application</button>
      </form>
    </div>
  </div>

);

export default ScholarshipForm;
