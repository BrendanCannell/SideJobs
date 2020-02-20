const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
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
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };
// userSchema.methods.validPassword = function( pwd ) {
    
    // return ( this.password === pwd );
// };
// userSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', userSchema);


module.exports = User;
