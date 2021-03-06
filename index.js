var PORT = 8000;
var express = require('express');
var app = express.createServer();
var storage = {};

app.get('/get/:key', function(req, res) {
    var val = storage[req.params.key];
    if (val === undefined) { val = ''; }
    val = '"' + val + '"';
    if (req.query.callback) {
        val = req.query.callback + '(' + val + ')';
    }
    res.send(val);
});
app.get('/set/:key/:val', function(req, res) {
    var val = '';
    storage[req.params.key] = req.params.val;
    if (req.query.callback) {
        val = req.query.callback + '()';
    }
    res.send(val);
});

console.log('Serving on port ' + PORT);
app.listen(PORT);
