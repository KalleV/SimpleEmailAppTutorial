'use strict';

var emailAppControllers = angular.module('emailAppControllers', []);

emailAppControllers.controller('InboxCtrl', function InboxCtrl(InboxService) {
    //var vm = this;
    //InboxService.getMessages()
    //    .success(function(jsonData, statusCode) {
    //        console.log('The request was successful!', statusCode, jsonData);
    //        vm.emails = jsonData;
    //    });
    this.title = "My Inbox";
});

emailAppControllers.controller('EmailCtrl', function EmailCtrl() {
    this.title = "Loading...";
});

