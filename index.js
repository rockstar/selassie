var PORT = 8000;
var express = require('express');
var app = express.createServer();
var storage = {test: 'success!'};

app.get('/get/:key', function(req, res) {
    res.send(storage[req.params.key]);
});

console.log('Serving on port ' + PORT);
app.listen(PORT);
