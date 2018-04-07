var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.list_users = function (req , res) {

    User.find({} , function (err , user) {
        if(err)
            res.send(err);

        res.json(user);

    });

};

exports.create_user = function (req , res) {
    const promise1 = User.findOne({username : req.body.username});
    const promise2 = User.findOne({email : req.body.email});
    Promise.all([promise1, promise2]).then(function (values) {
        if(!values[0] && !values[1]) {
            var new_user = new User(req.body);
            new_user.save(function (err, user) {
                if(err) {
                    res.send(err);
                }
                else {
                    res.json(user);
                }
            });
        }

        else {
            res.send("User Already Exist ");
        }
    });
};

exports.loginUser = function (req , res) {

    const promise = User.findOne({username : req.body.username});
    promise.then(function (user) {
        if(!user) {
            res.send("user does not exist");
        }
        else if(user.password === req.body.password) {
            res.sendFile(path.join(__dirname + '/public/html/profile.html'));
        }
        else {
            res.send("incorrect password");
        }
    });

};

exports.delete = function (req, res) {
    User.remove({} , function (err) {
        if(err) {
            res.send(err);
        }
        else {
            res.send("All records are deleted successfully");
        }
    });
};

