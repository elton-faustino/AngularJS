var app = angular.module('app', []);

app.controller('MainController', ['$scope', 'myFactory', function($scope, a) {
    console.log(a.getData());
    a.addData('bla bla bla');
    a.reverse();
    console.log(a.getData());
}]);

app.factory('myFactory', function() {
    var myString = "other data "
    var addString = function(newStr) {
        myString += newStr;
    }
    return {
        getData: function() { return myString },
        setData: function(data) { myString = data },
        addData: addString
    }
});

app.config(function($provide) {
    $provide.decorator('myFactory', function($delegate) {
        $delegate.reverse = function() {
            $delegate.setData($delegate.getData().split('').reverse().join(''))
        }
        return $delegate
    })
})