const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
    // id: { type: Number, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    phoneNumber: { type: String},
    email: { type: String, required: true},
    zipCode: { type: String},
    city: { type: String}, 
    state: { type: String},
    password: { type: String}, 
    post: {
        type: Schema.Types.ObjectId, 
        ref: "Job"
    }
})

userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);


module.exports = User;
