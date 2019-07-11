
//usual routing etc
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + '/home.html'));
    //res.send("Welcome to Friend Catcher!");
})

//survey page
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname , "/survey.html"));
})

//friends list
app.get("/API/friends", function(req, res){
    res.sendFile(path.join(__dirname , "/friends.html"));
})



//New Code
// Create New friends - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var friend = req.body;
  
    //console.log(friend);
  
    // We then add the json the user sent to the friends array
    friends.push(friend);
  
    // We then display the JSON to the users
    res.json(friend);
  });