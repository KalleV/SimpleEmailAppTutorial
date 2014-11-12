'use strict';

var emailAppServices = angular.module('emailAppServices', []);

emailAppServices.factory('InboxService',
    function InboxService($q, $http, $location) {
    var service = {};

    service.messages = [];

    service.goToMessage = function(id) {
        if (angular.isNumber(id)) {
            // $location.path('inbox/email' + id)
        }
    };

    service.deleteMessage = function(id, index) {
        this.messages.splice(index, 1);
    };

    service.getMessages = function() {
        var deferred = $q.defer();
        return $http.get('../json/emails.json')
            .success(function(data) {
                service.messages = data;
                deferred.resolve(data);
            })
            .error(function(data) {
                deferred.reject(data);
            });
        return deferred.promise;
    };

    return service;
});