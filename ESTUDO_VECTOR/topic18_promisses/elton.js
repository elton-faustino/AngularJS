var app = angular.module('app', []);

app.controller('MainController', function($scope, $q, $timeout) {

    $scope.mydata = "Old data "

    var test = $q.defer();

    // test.promise
    //     .then(function(val) {
    //         $scope.mydata += val
    //     })
    test.promise
        .then(function(val) {
            $scope.mydata += val
            return val;
        })
        .then(function(val) {
            $scope.mydata += val
            return val;
        })

    $timeout(function() {
        test.resolve("Elton Faustino");
    }, 3000)

});