var app = angular.module('app', []);

app.controller('MainController', function($scope, myFactory, Auth){
  console.log(myFactory.mydata);
  console.log(myFactory.getdata());
});

// estao como publico
// app.factory('myFactory', function(){
//   return {
//     mydata: "this is some data",
//     getdata: function(){
//       return "this is myData";
//     }
//   }
// });

app.factory('myFactory', function(){
  var mydata = "Elton Faustion de Jesus"
  var myfunc = function(){

  }
  return {
    getdata: function(){
      return mydata;
    }
  }
});

app.factory('Auth', function(){
  var current_user = {}
  return {
    setUser : function{},
    login: function{}
  }
})
