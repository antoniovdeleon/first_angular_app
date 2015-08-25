angular.module('starter', ['ngRoute', 'starter.controllers'])

// configure routes
.config(['$routeProvider',
   function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/todos.html',
        controller: 'TodoIndexCtrl'
    })
      .otherwise({
        redirectTo: '/'
    })
      .when('/about', {
        templateUrl: 'templates/about',
        controller: ''
    })
      .when('/lists', {
        templateUrl: 'templates/lists.html',
        controller: 'TodoIndexCtrl'
      })

    }]);




