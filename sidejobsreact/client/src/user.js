const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    id: { type: Number, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    phoneNumber: { type: Number},
    email: { type: String, required: true},
    zipCode: { type: String},
    city: { type: String}
})

const User = mongoose.model('User', userSchema);

UserSchema.plugin(passportLocalMongoose);

module.exports = Job;
