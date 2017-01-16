var app = angular.module('app', ['controllers'])

angular.module('controllers', []).controller('MainController', function($scope, $http){
  $scope.chamados = null

  $http({
    method : 'GET',
    url : 'http://www.mocky.io/v2/587d562b0f0000d40d5df637'
  }).then(function mySuccess(response){
    $scope.chamados = response.data;
    console.log($scope.chamados)
  })

});
