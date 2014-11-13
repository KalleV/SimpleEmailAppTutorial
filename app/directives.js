'use strict';

var emailAppDirectives = angular.module('emailAppDirectives', []);

emailAppDirectives.directive('inbox', function inboxDirective() {
    return {
        restrict: 'EA',  // custom element or custom attribute
        replace: true,
        scope: true,
        templateUrl: 'partials/inbox.partial.html',
        controllerAs: 'inbox',
        controller: function(InboxService) {
            this.messages = [];
            //this.title = "My Inbox";

            this.goToMessage = function(id) {
                InboxService.goToMessage(id);
            };
            this.deleteMessage = function(id, index) {
                InboxService.deleteMessage(id, index);
            };
            // Bind is used, to ensure that the outer scope 'this' is used
            // '.then()' is a callback: it will occur after the async 'promise' has been returned
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

emailAppDirectives.directive('email', function emailDirective($timeout) {
    return {
        restrict: 'EA',
        replace: true,  // replace custom tags with more compliant divs
        scope: true,
        templateUrl: 'partials/email.partial.html',
        controllerAs: 'email',
        controller: function($routeParams, $scope, EmailService) {
            this.message = {};
            this.reply = function(message) {
                EmailService.reply(message);
            };
            var getMessage = EmailService.getMessage($routeParams);
            if (getMessage) {
                getMessage.then(angular.bind(this, function(response) {
                    EmailService.message = response;
                    console.log(getMessage);
                    this.message = EmailService.message;
                    $scope.$parent.email.title = this.message.subject;
                }));
            }
        },
        link: function(scope, element, attrs, ctrl) {
            // This function will scroll the screen down to the reply box if the button is toggled
            var textArea = element.find('.email__response-text')[0];

            // scope.$watch, will keep track of the value assigned to the 'reply' button, and then
            // run whenever its value changes
            scope.$watch('reply', function(newVal, oldVal) {
                if (newVal == oldVal) {
                    return;
                }
                if (newVal) {
                    // start a 0 second timer that scrolls the user down to the reply window
                    $timeout(function() {
                        textArea.focus();
                    }, 0);
                }
            })
        }
    }
});