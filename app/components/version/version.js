'use strict';

angular.module('emailApp.version', [
  'emailApp.version.interpolate-filter',
  'emailApp.version.version-directive'
])

.value('version', '0.1');
