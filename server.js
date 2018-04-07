var express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = require('path');
const port = 8000;
const mongoose = require('mongoose');
const User = require('./API/Model/loginModel');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UserDB');



app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/signup.html'));
});

app.get('/profile' , function (req, res) {
    res.sendFile(path.join(__dirname + '/public/html/profile.html'));
});

const routes = require('./API/Route/loginRoute');
routes(app);

app.listen(8000);
console.log("Login page is listening to port :" + port);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});