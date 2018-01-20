

module.exports = {


	home: (req, res)=> {
		let title = 'Home';
		res.render('index', {
		title: title
	});
	},

	menu: (req, res)=> {
		let title = 'Menu';
		res.render('about', {
		title: title
	});
	},

	// app.get('/admin', htmlController.adminHome)
	adminHome: (req, res)=> {
		let title = 'Admin';
		res.render('admin_main', {
		title: title
	});
	},

	// app.get('/admin/teas', htmlController.adminTeaList)
	adminTeaList: (req, res)=> {
		res.render('admin_teas');
	},

	// app.get('/admin/foods', htmlController.adminFoodList)
	adminFoodList: (req, res)=> {
		res.render('admin_fooditems');
	},

	// app.get('/admin/other', htmlController.adminOtherProducts)
	adminOtherProducts: (req, res)=> {
		res.render('admin_other');
	},

	// app.get('/admin/admins', htmlController.adminViewAdmins)
	adminViewAdmins: (req, res)=> {
		res.render('admin_admins');
	},

	// app.get('/admin/employees', htmlController.adminViewEmployees)
	adminViewEmployees: (req, res)=> {
		res.render('admin_employees');
	},

	// app.get('/admin/customers', htmlController.adminViewCustomers)
	adminViewCustomers: (req, res)=> {
		res.render('admin_customers');
	},

	// app.get('/admin/purchases', htmlController.adminViewPurchases)
	adminViewPurchases: (req, res)=> {
		res.render('admin_purchases');
	},

	// app.get('/admin/calendar', htmlController.adminViewCalendar)
	adminViewCalendar: (req, res)=> {
		res.render('admin_calendar');
	},

	// app.get('/admin/blog', htmlController.adminViewBlog),
	adminViewBlog: (req, res)=> {
		res.render('admin_blogposts');
	},

	// app.get('/admin/events', htmlController.adminViewEvents)
	adminViewEvents: (req, res)=> {
		res.render('admin_events');
	},


}

	
	
	
	
	
	
	
	
	
	