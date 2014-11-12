'use strict';

// Declare app level module which depends on views, and components
var emailApp = angular.module('emailApp', [
    'emailAppControllers',
    'emailAppServices',
    'emailAppDirectives',
    'ngRoute',
    'emailApp.version'
]);

emailApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/inbox', {
        templateUrl: 'views/inbox.html',
        controller: 'InboxCtrl',
        controllerAs: 'inbox'
      })
      .when('/inbox/email/:id', {
        templateUrl: 'views/email.html',
        controller: 'EmailCtrl',
        controllerAs: 'email'
      })
      .otherwise({
        redirectTo: '/inbox'
      });
}]);
