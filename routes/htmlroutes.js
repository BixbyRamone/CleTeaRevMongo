let htmlController = require('../controllers/htmlControllers.js');

module.exports = (app)=> {

	app.get('/', htmlController.home),
	
	app.get('/menu', htmlController.menu),

// Admin html links
	app.get('/admin', htmlController.adminHome),
	app.get('/admin/teas', htmlController.adminTeaList),
	app.get('/admin/foods', htmlController.adminFoodList),
	app.get('/admin/other', htmlController.adminOtherProducts),
	app.get('/admin/admins', htmlController.adminViewAdmins),
	app.get('/admin/employees', htmlController.adminViewEmployees),
	app.get('/admin/customers', htmlController.adminViewCustomers),
	app.get('/admin/purchases', htmlController.adminViewPurchases),
	app.get('/admin/calendar', htmlController.adminViewCalendar),
	app.get('/admin/blog', htmlController.adminViewBlog),
	app.get('/admin/events', htmlController.adminViewEvents)

}