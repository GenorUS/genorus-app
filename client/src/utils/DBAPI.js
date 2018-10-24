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

    testRoute: function() {
        // axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get("/api/companies");


    },
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the Article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveArticles: function(ArticleData) {
    return axios.post("/api/articles", ArticleData);
  }
};