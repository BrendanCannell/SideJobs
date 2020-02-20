import axios from 'axios';

export default {
    // Gets all books
    getJobs: function() {
      return axios.get("/api/jobs");
    },
    // Gets the book with the given id
    // getJob: function(id) {
    //   return axios.get("/api/jobs/" + id);
    // },
    // Deletes the book with the given id
    deleteJob: function(id) {
      return axios.delete("/api/jobs/" + id);
    },
    // Saves a book to the database
    saveJob: function(jobData) {
      return axios.post("/api/jobs", jobData);
    },
    getUserProfile: function(id) {
      return axios.get("/api/user/" + id)
    },
    saveUser: function(User) {
      console.log(User);
      return axios.post("/api/auth/signup", User);
    },
    findUser: function(User) {
      return axios.get("/signin", User)
    },
    logoutUser: function(User) {
      return axios.get("/signout", User)
    },
    findByService: function (service) {
      return axios.get("/api/jobs/" + service);
    }
  };
  