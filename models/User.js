const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({
    // id: { type: Number, required: true},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String}, 
    post: {
        type: Schema.Types.ObjectId, 
        ref: "Job"
    }
})

// userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);


module.exports = User;
