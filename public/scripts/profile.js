var profile = angular.module('profile', []);
profile.controller('userCtrl' , function ($scope, $http) {
    var req = {
        method : 'POST',
        url : '/user/:username',
        headers: {
            'Content-Type': 'application/json'
        }

    };
    $scope.name = "Admin";
    $http(req).then(function (response) {
        console.log(response);
    }, function err(res) {
        console.log(res);

    });
});