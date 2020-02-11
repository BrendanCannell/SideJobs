import axios from "axios";

export default {
  // Gets all jobs
  getJobs: function() {
    return axios.get("/api/jobs");
  },
  // Gets the job with the given id
  getJob: function(id) {
    return axios.get("/api/jobs/" + id);
  },
  // Deletes the job with the given id
  deleteJob: function(id) {
    return axios.delete("/api/jobs/" + id);
  },
  // Saves a job to the database
  saveJob: function(jobData) {
    return axios.post("/api/jobs", jobData);
  },
// does the same as above, test function
  createNewPost: function(email, fullName) {
    let sendObject = { email, fullName };
    return axios.post("/api/jobs", sendObject);
  },
  // insert api route above we're posting to {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Delete the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(newUserData) {
    return axios.post("/api/users", newUserData);
  }
};
