var app = angular.module('app', []);

app.controller('MainController', ['$scope', 'myFactory', function(a, b){
  a.data = b.data
}])

app.factory('myFactory', ['AppendService' ,function(AppendService){
  return {
    data : AppendService.append("meus dados")
  }
}])

app.factory('AppendService', function(){
  return {
    append: function(val){
      return val + " and this too"
    }
  }
})
