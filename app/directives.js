'use strict';

var emailAppDirectives = angular.module('emailAppDirectives', []);

emailAppDirectives.directive('inbox', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'partials/inbox.partial.html',
        controllerAs: 'inbox',
        controller: function(InboxService) {
            this.messages = [];

            this.goToMessage = function(id) {
                InboxService.goToMessage(id);
            };
            this.deleteMessage = function(id, index) {
                InboxService.deleteMessage(id, index);
            };
            InboxService.getMessages()
                .then(angular.bind(this, function then() {
                    this.messages = InboxService.messages;
                }));
        },
        link: function(scope, element, attrs, ctrl) {
            /*
             by convention we do not $ prefix arguments to the link function
             this is to be explicit that they have a fixed order
            */
        }
    }
});