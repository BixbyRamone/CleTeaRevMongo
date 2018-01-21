const express = require('express');
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();


// Map Global Promise (keeps warning from popping up)
mongoose.Promise = global.Promise;
// connect to mongoose
mongoose.connect('mongodb://localhost/cletearev-dev', {
	useMongoClient: true
})
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err));


// Load Models
// require('./models/Tea');
// const Tea = mongoose.model('teas');

// =======Handlebars Middleware=======
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// =========Body Parsere Middleware==========
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());

// Linking CSS
app.use(express.static('public/css'));
// Setting up image links
app.use(express.static('public/images'));
// Setting up Google Fonts

// ===========Routes==================
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);
//============Running Server==========
let PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
	console.log(`Server started on port ${PORT}`);
});