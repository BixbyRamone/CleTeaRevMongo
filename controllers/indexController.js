const mongoose = require('mongoose');
require('../models/Tea');
const Tea = mongoose.model('teas');

module.exports = {

	// app.post('/teas', indexController.postTea)
	postTea: (req, res)=> {
		//BackEnd Error Checking
    	let errors = [];

    	console.log(req.body.pricecup);
    	
    	if(!req.body.name) {
    		errors.push({text: 'Please add a name'});
    	}
    	if(!req.body.pricecup) {
    		errors.push({text: 'Please add price per cup'});
    	}
    	if(!req.body.pricepot) {
    		errors.push({text: 'Please add price per pot'});
    	}
    	if(!req.body.priceoz) {
    		errors.push({text: 'Please add price per oz'});
    	}
    	if(!req.body.description) {
    		errors.push({text: 'Please add description'});
    	}
    	if(!req.body.category) {
    		errors.push({text: 'Please add a category'});
    	}
    	

    	if(errors.length > 0){
    		res.render('admin/admin_teas', {
    			errors: errors,
    			title: req.body.title,
    			pricecup: req.body.pricecup,
    			pricepot: req.body.pricepot,
    			priceoz: req.body.priceoz,
    			description: req.body.description,
    			category: req.body.category

    		});
    	} else {
    		console.log('========================');
    		console.log(req.body);
    		console.log('========================');
    		let newTea = {
    			name: req.body.name,
    			pricecup: req.body.pricecup,
    			pricepot: req.body.pricepot,
    			priceoz: req.body.priceoz,
    			description: req.body.description,
    			category: req.body.category
    		}
    		new Tea(newTea)
    		.save()
    		.then( tea=> {
    			// add req.flash
    			res.redirect('/admin/teas');
    		})
    	}
	}
}