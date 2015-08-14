'use strict';

/**
 * @ngdoc service
 * @name facturationApp.bdd
 * @description
 * # bdd
 * Service in the facturationApp.
 */
angular.module('facturationApp')
    .service('bdd', function(FactureResource, facture) {
            // AngularJS will instantiate a singleton by calling "new" on this function

            var self = this;
            self.listFactures = [];

            self.fillList = function(filtre) {


                self.listFactures.length = 0;
                self.filtre = filtre;
                FactureResource.query(function(data) {
                        angular.forEach(data, function(value, key) {
                                
                                if (typeof self.filtre != 'undefined' && self.filtre.length > 0) {
                                    
                                    if (value.customer.indexOf(self.filtre) > -1) {
                                        this.push(value);
                                    }
                                } else {
                                   
                                    this.push(value);
                                }
                            
                        }, self.listFactures); console.log(self.listFactures);
                });

        }

        self.delete = function(facture) {
            FactureResource.delete(facture, function() {
                self.fillList();

            });
        }

        self.update = function(facture) {
            FactureResource.update(facture, function() {
                self.fillList();
            });
        }

        self.create = function(facture) {
            FactureResource.create(facture, function() {
                self.fillList();
            })

        }

        self.fillList();


    });
