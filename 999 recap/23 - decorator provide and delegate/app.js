var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory){

  console.log(myFactory.getData());
  // myFactory.add(' de Jesus');
  myFactory.reverter();
  console.log(myFactory.getData());

});

// 1
app.factory('myFactory', function(){
  var meuNome = "socorram me subi no onibus em marrocos"
  var addString = function(newStr){
    meuNome += newStr;
  }
  return {
    getData: function(){return "My name is: "+meuNome;},
    setData: function(data){meuNome = data},
    add: addString
  }
})

app.config(function($provide){
  // delete - instance of a service, no access to private members
  $provide.decorator('myFactory', function($delegate){
    $delegate.reverter = function(){
      $delegate.setData($delegate.getData().split('').reverse().join(''));
    }
    return $delegate;
  })
})
