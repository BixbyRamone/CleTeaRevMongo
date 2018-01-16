module.exports = {


	home: (req, res)=> {
		let title = 'Home';
		res.render('index', {
		title: title
	});
	},

	adminHome: (req, res)=> {
		let title = 'Admin';
		res.render('adminHome', {
		title: title
	});
	},

	menu: (req, res)=> {
		let title = 'Menu';
		res.render('about', {
		title: title
	});
	}


}