var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory, myTeste){

  // console.log(myFactory.getData());
  // myFactory.add(' de Jesus');
  // console.log(myFactory.getData());

  // console.log(myFactory.getData());
  // myFactory.add(' de Jesus');
  // console.log(myFactory.getData());

  console.log(myTeste.getData());
  myTeste.add(' de Jesus');
  console.log(myFactory.getData());

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

app.provider('myTeste', function(){
  var meuNome = "Elton Faustino"
  var addString = function(newStr){
    meuNome += newStr;
  }
  return{
    setData: function(data){
      meuNome = data
    },
    $get: function(){
      return {
        getData: function(){
          return "Meu nome eh: "+meuNome;
        },
        add: addString
      }
    }
  }
});

app.config(function(myTesteProvider){
  myTesteProvider.setData('bUNDA')
})
