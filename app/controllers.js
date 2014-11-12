'use strict';

var emailAppControllers = angular.module('emailAppControllers', []);

emailAppControllers.controller('InboxCtrl', function(InboxService) {
    var vm = this;
    InboxService.getMessages()
        .success(function(jsonData, statusCode) {
            console.log('The request was successful!', statusCode, jsonData);
            vm.emails = jsonData;
        });
    this.title = "This is a title";
});

