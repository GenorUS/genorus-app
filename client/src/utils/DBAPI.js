import axios from "axios";

export default {
    getAllCompanies: function (userData, cb) {
        return axios.get("/api/companies");

    },
    getScholarships: function (companyID) {
        return axios.get("/api/companies/" + companyID);
    },


    signIn: function (user, cb) {
        return axios.post("/api/users/login", user)
            .then((data) => {
                cb(data);
            });
    },
    submitApplication: (application) => {
        return axios.post("/api/application", application)
            .then((data) => {
                console.log('Application submitted!');
                console.log(data);
            });
    },
    getUserApplications: function (userId, cb) {

        return axios.get("/api/application/" + userId)
        // .then((data) => {
        //     console.log(data);
        //     cb(data);
        // });
    },
    getApplication: function (appID) {
        return axios.get("/api/application/" + appID + "/view");
    },
    deleteApplication: function(appID) {
        return axios.delete("/api/application/" + appID);
    },
      
  submitApplication: (application) => {
    return axios.post("/api/application", application)
      .then((data) => {
        console.log('Application submitted!');
        console.log(data);
    });
  },
  // School Data API -------------------------------------
  getHighSchoolData: (state, city) => {
    let st = state.toLowerCase();
    let c = city.toLowerCase();
    return axios.get(`https://genorus-school-data.herokuapp.com/api/schools/${st}/${c}`);
  },
  getCollegeData: (state, city) => {
    let st = state.toLowerCase();
    let c = city.toLowerCase();
    return axios.get(`https://genorus-school-data.herokuapp.com/api/colleges/${st}/${c}`);
  },
  getStateData: () => {
    return axios.get("https://genorus-school-data.herokuapp.com/api/states");
  }
};
