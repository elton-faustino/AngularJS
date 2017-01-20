var app = angular.module('app', []);

app.controller('MainController', function($scope){
  //$scope.mydata = {arr: ["jane", "jake", "steven", "hank"]}
  $scope.mydata = {arr: [{name: "jane", age: 34}, {name: "jake", age: 36 }]}

})
