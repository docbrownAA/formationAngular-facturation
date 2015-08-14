'use strict';

/**
 * @ngdoc function
 * @name facturationApp.controller:FormcontrollerCtrl
 * @description
 * # FormcontrollerCtrl
 * Controller of the facturationApp
 */
angular.module('facturationApp')
  .controller('FormcontrollerCtrl', function ($scope,bdd) {


    $scope.ajouter = function(facture){
    	bdd.create(facture);
    }
  });
