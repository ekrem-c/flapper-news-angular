var app = angular.module('flapperNews', []);

app.controller("MainCtrl", [
  '$scope',
  function($scope){
    $scope.test = "My name is Ekrem!";
  }
]);