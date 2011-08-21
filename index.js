var PORT = 8000;
var express = require('express');
var app = express.createServer();

console.log('Serving on port ' + PORT);
app.listen(PORT);
