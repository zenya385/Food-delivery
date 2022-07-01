const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productsSchema = new Schema({
	name: {
		type: String,
		required: [true],
	},
	image: {
		type: String,
		required: [true],
	},
	description: {
		type: String,
		required: [true],
	},
	info: {
		type: String,
		required: [true],
	},
	price: {
		type: Number,
		required: [true],
	},
	store: {
		type: String,
		required: [true],
	},

});

const Products = model("products", productsSchema);


module.exports = {
	Products,
};