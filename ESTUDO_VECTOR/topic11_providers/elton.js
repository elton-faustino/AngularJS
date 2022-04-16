var app = angular.module('app', []);

app.controller('MainController', function($scope, myTest) {
    // app.controller('MainController', function($scope, myService) {

    // console.log(myFactory.getData());
    // myFactory.addData('bla bla bla');
    // console.log(myFactory.getData());

    console.log(myTest.getData());
    myTest.addData('bla bla bla');
    console.log(myTest.getData());
});

// app.factory('myFactory', function() {
//     var myString = "other data "
//     var addString = function(newStr) {
//         myString += newStr;
//     }
//     return {
//         getData: function() {
//             return "string contains: " + myString
//         },
//         addData: addString
//     }
// });

app.provider('myTest', function() {
    var myString = "other data "
    var addString = function(newStr) {
        myString += newStr;
    }
    return {
        setData: function(data) {
            myString = data
        },
        $get: function() {
            return {
                getData: function() {
                    return "string contains: " + myString
                },
                addData: addString
            }
        }
    }
});

app.config(function(myTestProvider) {
    myTestProvider.setData('Elton Faustino');
});