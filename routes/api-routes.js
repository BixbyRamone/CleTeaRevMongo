const indexController = require('../controllers/indexController');

module.exports = (app)=> {
	// post tea into db
	app.post('/teas', indexController.postTea)
}