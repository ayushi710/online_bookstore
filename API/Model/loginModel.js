var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    fname : {

        type : String

    },

    lname : {
        type : String

    },

    email : {
        type : String
    },

    dob : {
        type: Date

    },

    username : {
        type: String,

        required: 'Kindly enter the username'

    },
    password: {
        type : String,
        required : 'Enter the password'
    }

});

module.exports = mongoose.model('User',UserSchema);