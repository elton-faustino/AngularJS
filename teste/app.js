app = angular.module('app', []);

app.controller('MainController', function($scope){
    $scope.teste = "angular js";

    $scope.comentarios = [];
    $scope.comentario = '';

    $scope.adicionarComentario = function(comentario){
        $scope.comentarios.push(comentario);
    }
});

app.filter('reverse', function() {
    return function(items) {
      return items.slice().reverse();
    };
});