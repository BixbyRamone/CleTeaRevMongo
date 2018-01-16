let htmlController = require('../controllers/htmlControllers.js');

module.exports = (app)=> {

	app.get('/admin/home', htmlController.adminHome),
	app.get('/', htmlController.home),
	app.get('/menu', htmlController.menu)

}