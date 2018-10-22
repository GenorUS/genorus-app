import axios from "axios";

export default {
  signUp: function (userData,cb) { 
    
    return axios.post("/api/users/signup", userData)
      .then((data) => {
        cb(data);
      });
    
  },

  signIn: function (user, cb) {

    return axios.post("/api/users/login", user).then(() => {

    });
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
