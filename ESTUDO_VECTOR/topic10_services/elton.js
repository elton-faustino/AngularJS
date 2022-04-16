var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory) {
    // app.controller('MainController', function($scope, myService) {
    console.log(myFactory.getData());
    myFactory.addData('bla bla');
    console.log(myFactory.getData());

    // console.log(myService.getData());
    // myService.addData('bla bla');
    // console.log(myService.getData());
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

// app.service('myService', function() {
//     var myString = "other data "
//     var addString = function(newStr) {
//         myString += newStr;
//     }

//     this.getData = function() {
//         return "string contains: " + myString
//     }
//     this.addData = addString
// });


app.factory('myFactory', function() {
    return new EltonClass();
});

app.service('myService', EltonClass);

function EltonClass() {
    var myString = "other data "
    var addString = function(newStr) {
        myString += newStr;
    }

    this.getData = function() {
        return "string contains: " + myString
    }
    this.addData = addString
}