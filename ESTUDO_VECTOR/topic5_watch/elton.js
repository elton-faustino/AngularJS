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

// var app = angular.module('app', ['eltinho']);

// angular.module('eltinho', []).controller('MainController', function($scope){
//     $scope.count = 1;
//     $scope.even = false;

//     $scope.inc = function(){
//         $scope.count += 1;
//         $scope.even = $scope.count % 2 == 0;
//     }
// });

var app = angular.module('app', []);

app.controller('MainController', function($scope) {
    $scope.mydata = { name: "jake" }
        // $scope.toolong = false;

    $scope.$watch('mydata.name', function(newval) {
        $scope.mydata.toolong = newval.length > 15;
    });
});