var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory){
  console.log(myFactory.getData())
  myFactory.trocar()
  console.log(myFactory.getData())
})

app.factory('myFactory', function(){
  var myString = "this is some data"
  var addToString = function(newStr){
    myString += newStr
  }
  return{
    getData: function(){ return myString },
    setData: function(data){ myString = data },
    addData: addToString
  }
})

app.config(function($provide){
  $provide.decorator('myFactory', function($delegate){
    $delegate.trocar = function(){
      $delegate.setData($delegate.getData().split('').reverse().join(''))
    }
    return $delegate
  })
})

/*Services Types
  Constats
  Values
  Factories
  Services
  Provides
  Decoratos*/
