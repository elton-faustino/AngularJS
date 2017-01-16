var app = angular.module('app', []);

//3 forma - mais limpa e melhor para produçã0
//angular.module('controllers', []).controller('MainController', function($scope){
  //$scope.val = 'teste123';
  //$scope.minhaFuncao = function(){
    //return 'Elton Faustino de Jesus';
  //}
//});

//2 forma - propriedade continua global
app.controller('MainController', function($scope){
  $scope.mydata = {val: "jake"}

  $scope.$watch('mydata.val', function(newval){
    $scope.mydata.toolong = newval.length > 15
    console.log('got here')
  })
});

app.controller('SubController', function($scope){

});

//1 forma - polui os objetos gglobais
//var MainController = function($scope){
  //$scope.val = 'teste123';
  //$scope.minhaFuncao = function(){
    //return "Elton Faustino de Jesus";
  //}
//}
