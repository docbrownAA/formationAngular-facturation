'use strict';

/**
 * @ngdoc service
 * @name facturationApp.facture
 * @description
 * # facture
 * Factory in the facturationApp.
 */
angular.module('facturationApp')
  .factory('facture', function () {
    // Service logic
    // ...

    var Facture = function(id,customer,price){
      this.id = id;
      this.customer = customer;
      this.price = price;
    };

    // Public API here
    return {
      toFacture: function (data) {
        return new Facture(data.id,data.customer, data.price);
      }
    };
  });
