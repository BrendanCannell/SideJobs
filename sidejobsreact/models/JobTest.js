const mongoose = require('mongoose');
// error, can't make an object
const Schema = mongoose.Schema;

const jobTestSchema = new Schema({
    id: { type: Number},
    firstName: { type: String},
    lastName: { type: String},
    service: { type: String},
    description: { type: String},
    phoneNumber: { type: Number},
    email: { type: String},
    zipCode: { type: String},
    costPerHour: { type: Number},
    city: { type: String},
    date: { type: Date, default: Date.now }
})

const JobTest = mongoose.model('JobTest', jobTestSchema);

module.exports = JobTest;