var app = angular.module('app', []);

app.controller('MainController', ['$scope', 'DataService', function(a, b){
  a.mydata = b.data
}]);

app.factory('DataService', ['AppendService',function(x){
  return{
    data: x.append("this is a service data")
  }
}]);

app.factory('AppendService', function(){
  return{
    append:  function(val){
      return val + " string added";
    }
  }
});
