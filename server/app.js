var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req,res){
    res.send("hello...");
});

app.listen(app.get('port'), function(){
    console.log("Listening on Port:" + app.get('port'));
});