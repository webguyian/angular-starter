var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {
  $scope.greeting = 'Hello World!';
  $scope.message = 'Welcome to my website.';
});