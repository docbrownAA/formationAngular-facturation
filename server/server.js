/*global require,__dirname,console*/
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var factures = require('./factures');

var app = express();
var id = factures.length+1;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/app'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});
app.get('/api/factures', function(req, res) {
    res.send(factures);
    console.log('Liste des factures servies');
});

// Creation
app.post('/api/factures', function(req, res) {
    var facture = req.body;
    facture.id = ++id;
    factures.push(facture);
    res.send(facture);
    console.log('Facture créée');
});

// Update
app.put('/api/factures', function(req, res) {

    var facture = _.findWhere(factures, {
        id: parseInt(req.body.id)
    });
    facture.price = req.body.price;
    facture.customer = req.body.customer;

    res.send(req.body);
    console.log('Facture modifiée');
});

// Remove
app.delete('/api/factures/:id', function(req, res) {
    var facture = _.findWhere(factures, {
        id: parseInt(req.params.id)
    });
    factures = _(factures).without(facture);
    res.send(req.body);
    console.log('Facture suprimmée');
});

app.listen(9001);

console.log('Listening on port 9001');
