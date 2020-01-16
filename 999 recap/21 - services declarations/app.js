var app = angular.module('app', []);

app.controller('MainController', function($scope, myService){
  // console.log(myFactory.getData());
  // myFactory.add(' de Jesus');
  // console.log(myFactory.getData());

  console.log(myService.getData());
  myService.add(' de Jesus');
  console.log(myService.getData());
});

// 1
// app.factory('myFactory', function(){
//   var meuNome = "Elton Faustino"
//   var addString = function(newStr){
//     meuNome += newStr;
//   }
//   return {
//     getData: function(){
//       return "Meu nome eh: "+meuNome;
//     },
//     add: addString
//   }
// })

// 2
// declare a new instance of a class
// app.service('myService', function(){
//   var meuNome = "Elton Faustino"
//   var addString = function(newStr){
//     meuNome += newStr;
//   }
//   return {
//     getData: function(){
//       return "Meu nome eh: "+meuNome;
//     },
//     add: addString
//   }
// })

// 3
// app.factory('myService', function(){
//   return new ServiceClass();
// })

// 4
app.service('myService', ServiceClass);

function ServiceClass(){
  var meuNome = "Elton Faustino"
  var addString = function(newStr){
    meuNome += newStr;
  }

    this.getData = function(){
      return "Meu nome eh: "+meuNome;
    }
    this.add = addString;
}
