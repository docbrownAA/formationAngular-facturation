'use strict';

/**
 * @ngdoc function
 * @name facturationApp.controller:ListefacturesCtrl
 * @description
 * # ListefacturesCtrl
 * Controller of the facturationApp
 */
angular.module('facturationApp')
  .controller('ListefacturesCtrl', function ($scope,bdd) {

    $scope.factures = bdd.listFactures;
    bdd.filtre = $scope.filtre;
    $scope.delete = function(id){
    	bdd.delete(id);

    }
    $scope.update = function(facture){
    	bdd.update(facture);
    }
    $scope.ajouter = function(facture){

    }
    
  });
