
module.exports = function (app ) {
    var user = require('../Controller/loginController');

    app.get('/');

    app.route('/user')
        .get(user.list_users)
        .post(user.create_user)
        .put(user.delete);

    app.route('/user/:username')
        .post(user.loginUser);



};