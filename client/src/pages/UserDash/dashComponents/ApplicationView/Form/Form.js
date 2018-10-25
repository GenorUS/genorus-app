import React from "react";


const ScholarshipForm = ({info, scholar}) => (
    <div className="row">
        <div className="col-lg-10 mb-4">
            <h3>{scholar.name}</h3>
            <form name="application" id="contactForm" noValidate>

                {/*Demographic Dataset*/}
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>First Name:</label>
                        <input name="firstname" type="text" className="form-control" value={info.firstname}  placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Last Name:</label>
                        <input name="lastname" type="text" className="form-control" value={info.lastname}  placeholder="Last Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input name="address" type="text" className="form-control" value={info.address}  placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label>Address 2</label>
                    <input name="address2" type="text" className="form-control" value={info.address2 ? info.address2 : null}  placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>City</label>
                        <input name="city" type="text" className="form-control" value={info.city} />
                    </div>
                    <div className="form-group col-md-4">
                        <label>State</label>
                        <select name="state" value={info.state}  className="form-control">
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label>Zip Code</label>
                        <input name="zipcode" type="text" className="form-control" value={info.zipcode} />
                    </div>
                </div>

                {/*Date of Birth Selection*/}
                <div className="control-group form-group">
                    <div className="controls form-row">
                        <div>
                           Birthday: {info.dob_month}/{info.dob_day}/{info.dob_year}
                        </div>
                    </div>
                </div>


                {/*Gender fieldset below*/}
                <fieldset className="form-group">
                    <div className="row">

                        <div>
                           Gender: {info.gender}
                        </div>
                    </div>
                </fieldset>

                {/*Ethnicity fieldset below*/}
                <fieldset className="form-group">
                    <div className="row">
                        Ethnicity: {info.ethnicity}
                    </div>
                </fieldset>

                {/*Grade and Essay Requirements Below*/}
                <div className="control-group form-group">
                    <div className="controls">
                        <label>GPA:</label>
                        <input name="gpa" type="number" className="form-control" value={info.GPA ? info.GPA : null} required data-validation-required-message="Please enter your GPA." />
                    </div>
                </div>
                <div className="control-group form-group">
                    <div className="controls">
                        <label>SAT Score:</label>
                        <input name="sat_score" type="number" className="form-control" value={info.sat_score ? info.sat_score : null}  required data-validation-required-message="Please enter your SAT Score." />
                    </div>
                </div>
                <div className="control-group form-group">
                    <div className="controls">
                        <label>ACT Score:</label>
                        <input name="act_score" type="number" className="form-control" value={info.act_score ? info.act_score : null}  required data-validation-required-message="Please enter your ACT Score." />
                    </div>
                </div>
                <div className="control-group form-group">
                    <div className="controls">
                        <label>Short Essay:</label>
                        <textarea name="essay" type="text" rows="10" cols="100" className="form-control" value={info.essay ? info.essay : null}  required data-validation-required-message="Please enter your message" maxLength="500" style={{resize: "none"}} />
                    </div>
                </div>
                <div id="success"></div>
                <button className="btn btn-primary"><a href={"/profile/:userId"}> Back To Profile </a> </button>
            </form>
        </div>
    </div>

);

export default ScholarshipForm;
