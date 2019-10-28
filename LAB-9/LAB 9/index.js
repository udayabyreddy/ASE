var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

//Setting View Engine
app.set('view engine', 'pug');

//Setting public folder
app.use(express.static('public'));
app.use(cookieParser());

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
   extended: true
}));

//Default Route
app.get('/', function(req, res){

   res.render('index')
});

app.get('/details', function(request, response) {
   response.send('Authorized!');
});



app.post('/details',(req,res) => {
   res.cookie('sample', req.body);
   res.render('details', {cookie: req.cookies.sample});

   // console.log("Cookies: " + req.cookies);
   console.log("Details: " + req.cookies.user);
   username = req.body;
   // password = req.param.password;
   //
   console.log("username: " + username);

});
//
app.post('/', (req,res) => {
   console.log("Body");
   console.log(req.body);
   res.cookie('user', req.body).render('index');
});

//Listening to nodeJS Application
app.listen(4200, function(){
   console.log("Listening to port 4200")
});
