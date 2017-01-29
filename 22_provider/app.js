var app = angular.module('app', []);

/*app.controller('MainController', function($scope, constService, valService, twitterAPI){
  console.log(constService)
  console.log(valService)

  twitterAPI.url = "newurl"
  console.log(twitterAPI)
})*/

app.controller('MainController', function($scope, myFactory, myService, myTest){
  console.log(myFactory.getData())
  myFactory.addData('bla bla bla bla')
  console.log(myFactory.getData())

  console.log(myService.getData())
  myService.addData('bla bla bla bla')
  console.log(myService.getData())

  console.log(myTest.getData())
  myTest.addData('bla bla bla bla')
  console.log(myTest.getData())
  //console.log(myFactory)
  //console.log(myFactory.getdata())
  //console.log(myFactory.mydata)
})

app.factory('myFactory', function(){
  var myString = 'this is some other string'
  var addToString = function(newStr){
    myString += newStr
  }
  return {
    getData : function(){
      return "String contains" + myString
    },
    addData: addToString
  }
})

app.provider('myTest', function(){
  var myString = 'this is some other string'
  var addToString = function(newStr){
    myString += newStr
  }

  return{
    setData: function(data){
      myString = data
    },
    $get: function(){
    return {
      getData : function(){
        return "String contains" + myString
      },
      addData: addToString
    }
  }
  }
})

app.config(function(myTestProvider){
  myTestProvider.setData('outra frase nada a ')
})

//service declares a new instance of a class
app.service('myService', function(){
  var myString = 'this is some other string'
  var addToString = function(newStr){
    myString += newStr
  }

  this.getData = function(){
    return "String contains" + myString
  }
  this.addData = addToString

})

/*app.factory('myFactory', function(){
  var mydata = "this is other data"
  return {
    /*mydata : "this is some data",*/
    /*getdata: function(){
      //return this.mydata
      return mydata
    }
  }
})*/

/*app.factory('Auth', function(){
  var current_user = {}
  return {
    setUser: function(){},
    login: funtion(){}
  }
})*/

app.constant('twitterAPI', {url: "api.twitter.com/v1/"})

/*cannot be modified by decorators*/
app.constant('constService', {attr: "this is const data!"})

/*can be modified by decorators*/
app.value('valService', function(){ return "this is return from a fn"})

/*app.controller('MainController', function($scope, TwitterService){
  TwitterService.tweet('I am tweeting this')
})*/

/*Services Types
  Constats
  Values
  Factories
  Services
  Provides
  Decoratos*/
