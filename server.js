var express = require("express");
var path = require("path");
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + '/home.html'));
    //res.send("Welcome to Friend Catcher!");
})

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname , "/survey.html"));
})

app.get("/API/friends", function(req, res){
    res.sendFile(path.join(__dirname , "/friends.html"));
})

app.listen(PORT, function(){
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
})