// var app = angular.module('app', []);

// add na aplicacao inteira
// app.controller('MainController', function($scope){
//     $scope.name = 'Elton Faustino de Jesus';
// });

var app = angular.module('app', ['controllersModule']);

angular.module('controllersModule', []).controller('MainController', function($scope){
        $scope.name = 'Elton Faustino de Jesus';
});