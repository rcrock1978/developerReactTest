var mongoose = require('mongoose');

var BasketSchema = new mongoose.Schema({
	Item: String,
	Price: Number,
	updated_date: { type: Date, default: Date.now },
  });

  module.exports = mongoose.model('Basket', BasketSchema);

  