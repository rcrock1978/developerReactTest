var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Basket = require('../models/Basket');

/* GET ALL BASKETS */
router.get('/', function(req, res, next) {
	Basket.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BASKET BY ID */
router.get('/:id', function(req, res, next) {
	Basket.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BASKET */
router.post('/', function(req, res, next) {
	Basket.create(req.body, function (err, post) {
    
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BASKET */
router.put('/:id', function(req, res, next) {
	Basket.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BASKET */
router.delete('/:id', function(req, res, next) {
	Basket.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;