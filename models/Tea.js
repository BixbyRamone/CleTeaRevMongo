const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const IdeaSchema = new Schema({
	name:{
		type: String
		// required: true
	},
	pricecup:{
		type: Number
		// required: true
	},
	pricepot:{
		type: Number
		// required: true
	},
	priceoz:{
		type: Number
		// required: true
	},
	details:{
		type: String
		// required: true
	},
	category:{
		type: String
		// required: true
	},
	available:{
		type: String
		// required: true
	},
	imageLink:{
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('teas', IdeaSchema);