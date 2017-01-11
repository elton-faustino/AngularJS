var app = angular.module('app', []);

app.controller('MainController', function($scope){
  //$scope.classVar = "orange"
  $scope.classVar = true
  $scope.myarr = [1,2,3,4,5,5]
  $scope.users = [{name:"mike",age:23},{name:"andy",age:34},{name:"andy",age:34}]
})

//3 forma - mais limpa e melhor para produçã0
//angular.module('controllers', []).controller('MainController', function($scope){
  //$scope.val = 'teste123';
  //$scope.minhaFuncao = function(){
    //return 'Elton Faustino de Jesus';
  //}
//});

//2 forma - propriedade continua global

  //$scope.minhaFuncao = function(){
    //return "Elton Faustino de Jesus";
  //}

  //$scope.val = 1;
  //$scope.even = false;

  //$scope.inc = function(){
    //$scope.val += 1;
    //$scope.even = $scope.val%2 == 0;
  //}

  //$scope.isEvent = function(){
    //return $scope.val%2 == 0;
  //}
//});

//1 forma - polui os objetos gglobais
//var MainController = function($scope){
  //$scope.val = 'teste123';
  //$scope.minhaFuncao = function(){
    //return "Elton Faustino de Jesus";
  //}
//}
