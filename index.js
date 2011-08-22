var PORT = 8000;
var express = require('express');
var app = express.createServer();
var storage = {test: 'success!'};

app.get('/get/:key', function(req, res) {
    var val = storage[req.params.key];
    if (val === undefined) { val = ''; }
    res.send('"' + val + '"');
});

console.log('Serving on port ' + PORT);
app.listen(PORT);
