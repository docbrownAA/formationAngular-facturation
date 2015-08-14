'use strict';

/**
 * @ngdoc directive
 * @name facturationApp.directive:factureDetail
 * @description
 * # factureDetail
 */
angular.module('facturationApp')
  .directive('factureDetail', function () {
    return {
      templateUrl: 'views/facturedetail.html',
      restrict: 'E',
      replace: 'true',
      controller: function ($scope) {
        
      }
    };
  });
