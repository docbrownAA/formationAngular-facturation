'use strict';

/**
 * @ngdoc service
 * @name facturationApp.FactureResource
 * @description
 * # FactureResource
 * Factory in the facturationApp.
 */
angular.module('facturationApp')
    .factory('FactureResource', function($resource) {


        // Public API here
        return $resource("http://localhost:9001/api/factures/:id", {},{
            update: { method: 'PUT' },
            delete: {method: 'DELETE', param:{id:'@id'}},
            create: {method:'POST',param:{customer:'@customer',price:'@price'}}
        });

    });
