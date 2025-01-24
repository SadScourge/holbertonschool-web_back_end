var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send("Hello Holberton School!");
});

app.listen(1245);