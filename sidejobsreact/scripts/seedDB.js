const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/sidejobdb"
);

const jobsSeed = [
  {
    id: "1",
    firstName: "Robert",
    lastName: "Moore",
    service:"Weightlifting Lessons",
    description:"Learn to lift weights today!",
    phoneNumber:"9999999999",
    email:"sample1@gmail.com",
    zipCode:"27517",
    costPerHour:"40",
    city:"Chapel Hill",
    date: new Date(Date.now())
  },
  {
    id: "2",
    firstName: "Gabriel",
    lastName: "Mixon",
    service:"Violin Lessons",
    description:"Learn to play the violin, not so free of charge!",
    phoneNumber:"1111111111",
    email:"sample2@gmail.com",
    zipCode:"27713",
    costPerHour:"100",
    city:"Durham",
    date: new Date(Date.now())
  },
  {
    id: "3",
    firstName: "Lillian",
    lastName: "Portenier",
    service:"Coffee Lessons",
    description:"Learn to make coffee from a real life certifiable barrister!",
    phoneNumber:"2222222222",
    email:"sample3@gmail.com",
    zipCode:"27617",
    costPerHour:"30",
    city:"Raleigh",
    date: new Date(Date.now())
  }
];

db.SideJob
  .remove({})
  .then(() => db.SideJob.collection.insertMany(jobsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
