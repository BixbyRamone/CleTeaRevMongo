const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const IdeaSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	priceCup:{
		type: Number,
		required: true
	},
	pricePot:{
		type: Number,
		required: true
	},
	priceOz:{
		type: Number,
		required: true
	},
	details:{
		type: String,
		required: true
	},
	category:{
		type: String,
		required: true
	},
	available:{
		type: String,
		required: true
	},
	imageLink:{
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('ideas', IdeaSchema);