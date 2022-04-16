// angular.module('app', []);

// deprecated
// var MainController = function($scope)
// {
//     $scope.val = "teste123";
//     $scope.getMyName = function()
//     {
//         return "My name is Elton";
//     }
// }

// adds the code on the entire applications
// var app = angular.module('app', []);

// app.controller('MainController', function($scope){
//     $scope.val = '10';
//     $scope.getMyName = function()
//     {
//         return "My name is Elton";
//     }
// });

var app = angular.module('app', ['eltinho']);

angular.module('eltinho', []).controller('MainController', function($scope){
    $scope.val = 'val';
});