var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory) {
    console.log(myFactory.mydata);
    console.log(myFactory.getData());
    console.log(myFactory.musico);
});

app.factory('myFactory', function() {
    var mydata = "this is some data";
    var bira = 'bira';
    return {
        getData: function() {
            return mydata
        },
        musico: bira
    }
});