const mongoose = require('mongoose');
require('../models/Tea');
const Tea = mongoose.model('teas');

module.exports = {

	// app.get('/', htmlController.home)
	home: (req, res)=> {
		let title = 'Home';
		res.render('index', {
		title: title
	});
	},

	// app.get('/menu', htmlController.menu)
	menu: (req, res)=> {
		let catArray = [];
		let title = 'Menu';
		Tea.find({})
    	.sort()
    	.then(teas => {
    		for (var i = 0; i < teas.length; i++) {
    			if (catArray.indexOf(teas[i].category) === -1){
    				catArray.push(teas[i].category);
    			}
    		}
    		console.log(catArray);
    		res.render('menu', {
    			title: title,
    			teas: teas,
    			catArray: catArray
    		});
    	});
    	
	},

	// 	app.get('/wholesale', htmlController.wholesale)
	wholesale: (req, res)=> {
		res.render('wholesale');
	},	
	
	// app.get('/kumbucha', htmlController.kombucha)
	kombucha: (req, res)=> {
		res.render('kombucha');
	},

	// app.get('/calendar', htmlController.calendar)
	calendar: (req, res)=> {
		res.render('calendar');
	},

	// app.get('/news', htmlController.news)
	news: (req, res)=> {
		res.render('news');
	},

	// app.get('/locations', htmlController.locations)
	locations: (req, res)=> {
		res.render('locations');
	},

	// app.get('/about', htmlController.about)
	about: (req, res)=> {
		res.render('about');
	},

	// app.get('/store', htmlController.store)
	store: (req, res)=> {
		res.render('store');
	},

	// app.get('/admin', htmlController.adminHome)
	adminHome: (req, res)=> {
		let title = 'Admin';
		res.render('admin/admin_main', {
		title: title
	});
	},

	// app.get('/admin/teas', htmlController.adminTeaList)
	adminTeaList: (req, res)=> {
		res.render('admin/admin_teas');
	},

	// app.get('/admin/foods', htmlController.adminFoodList)
	adminFoodList: (req, res)=> {
		res.render('admin/admin_fooditems');
	},

	// app.get('/admin/other', htmlController.adminOtherProducts)
	adminOtherProducts: (req, res)=> {
		res.render('admin/admin_other');
	},

	// app.get('/admin/admins', htmlController.adminViewAdmins)
	adminViewAdmins: (req, res)=> {
		res.render('admin/admin_admins');
	},

	// app.get('/admin/employees', htmlController.adminViewEmployees)
	adminViewEmployees: (req, res)=> {
		res.render('admin/admin_employees');
	},

	// app.get('/admin/customers', htmlController.adminViewCustomers)
	adminViewCustomers: (req, res)=> {
		res.render('admin/admin_customers');
	},

	// app.get('/admin/purchases', htmlController.adminViewPurchases)
	adminViewPurchases: (req, res)=> {
		res.render('admin/admin_purchases');
	},

	// app.get('/admin/calendar', htmlController.adminViewCalendar)
	adminViewCalendar: (req, res)=> {
		res.render('admin/admin_calendar');
	},

	// app.get('/admin/blog', htmlController.adminViewBlog),
	adminViewBlog: (req, res)=> {
		res.render('admin/admin_blogposts');
	},

	// app.get('/admin/events', htmlController.adminViewEvents)
	adminViewEvents: (req, res)=> {
		res.render('admin/admin_events');
	},

	postTea: (req, res)=> {
		//BackEnd Error Checking
    	let errors = [];
    	console.log('POST');
    	console.log(req.body);
	}


}

	
	
	
	
	
	
	
	
	
	