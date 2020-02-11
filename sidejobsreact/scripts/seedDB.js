const mongoose = require("mongoose");
const db = require("../models");
// const db = require("../../../models");


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
    phoneNumber:"999-999-9999",
    email:"sample1@gmail.com",
    zipCode:"27517",
    costPerHour:"40",
    city:"Chapel Hill",
    date: "Febuary 9, 2020"
  },
  {
    id: "2",
    firstName: "Gabriel",
    lastName: "Mixon",
    service:"Violin Lessons",
    description:"Learn to play the violin, not so free of charge!",
    phoneNumber:"111-111-1111",
    email:"sample2@gmail.com",
    zipCode:"27712",
    costPerHour:"50",
    city:"Durham",
    date: "Febuary 9, 2020"
  },
  {
    id: "3",
    firstName: "Lillian",
    lastName: "Portenier",
    service:"Coffee Lessons",
    description:"Learn to make coffee from a real life certifiable barrister!",
    phoneNumber:"222-222-2222",
    email:"sample3@gmail.com",
    zipCode:"27617",
    costPerHour:"30",
    city:"Raleigh",
    date: "Febuary 9, 2020"
  },
  {
    id: "4",
    firstName: "Chistopher",
    lastName: "Hitchens",
    service:"Writing Lessons",
    description:"Learn to write with a great polemicist",
    phoneNumber:"222-222-2222",
    email:"sample4@gmail.com",
    zipCode:"27617",
    costPerHour:"200",
    city:"London",
    date: "Febuary 9, 2020"
  },
  {
    id: "5",
    firstName: "Norm",
    lastName: "MacDonald",
    service:"Humor Lessons",
    description:"Learn to make jokes and laugh",
    phoneNumber:"222-222-2222",
    email:"sample5@gmail.com",
    zipCode:"27617",
    costPerHour:"10",
    city:"New York",
    date: "Febuary 9, 2020"
  },
  {
    id: "6",
    firstName: "Michael",
    lastName: "Baden",
    service:"Medical Examination Lessons",
    description:"Learn how someone died!",
    phoneNumber:"222-222-2222",
    email:"sample6@gmail.com",
    zipCode:"27617",
    costPerHour:"300",
    city:"New York",
    date: "Febuary 9, 2020"
  },
  {
    id: "7",
    firstName: "Frasier",
    lastName: "Crane",
    service:"Psychiatry",
    description:"Improve yourself and make a change",
    phoneNumber:"222-222-2222",
    email:"sample3@gmail.com",
    zipCode:"27617",
    costPerHour:"300",
    city:"Seattle",
    date: "Febuary 9, 2020"
  },
  {
    id: "8",
    firstName: "Nurse",
    lastName: "Ratchet",
    service:"Home Care",
    description:"Home care for family members",
    phoneNumber:"222-222-2222",
    email:"sample3@gmail.com",
    zipCode:"27617",
    costPerHour:"100",
    city:"Cincinatti",
    date: "Febuary 9, 2020"
  },
  {
    id: "9",
    firstName: "Andy",
    lastName: "Dusfresne",
    service:"Digging Lessons",
    description:"Learn to dig through walls and pipes",
    phoneNumber:"222-222-2222",
    email:"sample3@gmail.com",
    zipCode:"27617",
    costPerHour:"12",
    city:"Augusta",
    date: "Febuary 9, 2020"
  },
  {
    id: "10",
    firstName: "Daniel",
    lastName: "Negreanu",
    service:"Poker Lessons",
    description:"Learn when to hold em and when to fold em!",
    phoneNumber:"222-222-2222",
    email:"sample3@gmail.com",
    zipCode:"27617",
    costPerHour:"450",
    city:"Las Vegas",
    date: "Febuary 9, 2020"
  }
];

db.Job
  .remove({})
  .then(() => db.Job.collection.insertMany(jobsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });