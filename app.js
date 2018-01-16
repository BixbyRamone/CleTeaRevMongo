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

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// ===========Routes==================
const index = require('./routes/htmlroutes.js')(app);
//============Running Server==========
let PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
	console.log(`Server started on port ${PORT}`);
});