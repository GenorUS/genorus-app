import axios from "axios";

export default {
  getAllCompanies: function (userData,cb) {
    return axios.get("/api/companies");

  },
  getScholarships: function(companyID) {
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
  testRoute: function() {
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get("/api/companies");
  }
};
