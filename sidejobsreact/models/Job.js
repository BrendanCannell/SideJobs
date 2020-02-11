const mongoose = require('mongoose');
// error, can't make an object
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    id: { type: Number, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    service: { type: String, required: true},
    description: { type: String, required: true},
    phoneNumber: { type: Number},
    email: { type: String, required: true},
    zipCode: { type: String},
    costPerHour: { type: Number},
    city: { type: String, required: true},
    date: { type: Date, default: Date.now }
})

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;


