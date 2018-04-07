var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.findOne = function (query) {
    return User.findOne(query);
};