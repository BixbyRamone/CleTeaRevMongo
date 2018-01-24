const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const FoodSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	description:{
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

mongoose.model('foods', FoodSchema);