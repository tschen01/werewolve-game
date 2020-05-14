var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

require('./server/models/db');
//require('./server/routes/lobby');
require('./server/routes/character.route')(app);
require('./server/routes/user.route')(app);

var port = process.env.PORT || 8000
app.listen(port)
console.log('server started ' + port)