const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    // console.log("inside find all")
    db.Job
      .find()
      .sort({ date: -1 })
      .then(dbJob => {
        // console.log(dbJob, "dbJOb");
        res.json(dbJob)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Job
      .findById(req.params.id)
      .then(dbJob => res.json(dbJob))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Job
      .create(req.body)
      .then(dbJob => res.json(dbJob))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Job
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbJob => res.json(dbJob))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Job
      .findById({ _id: req.params.id })
      .then(dbJob => dbJob.remove())
      .then(dbJob => res.json(dbJob))
      .catch(err => res.status(422).json(err));
  },
  findByService: function(req, res) {
    db.Job 
      .find({service: req.params.service})
      .then(dbJob => res.json(dbJob))
      .catch(err => console.log(err) ||  res.status(422).json(err));
  }
};
