var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 8999;
var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');


var app = express()

app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost:8999'
};

app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));
app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);
app.use(express.static(__dirname + '/public'));
console.log(__dirname)

app.listen(port, function() {
  console.log('listening on ' + port)
})
