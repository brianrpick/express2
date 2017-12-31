var express = require("express");
var app = express();

app.get("/", function(req, res) {
	res.send("Hi there, welcome to my assignment!")
})

app.get("/speak/:animal", function(req, res) {
	var animal = req.params.animal;
	var speak = {
		pig: "Oink!",
		cow: "Moo!", 
		dog: "Woof Woof!"
	};
	console.log(speak)
	res.send("The " + animal + " says " + speak[animal]);
})

app.get("/repeat/:word/:num", function(req, res) {
	var word = req.params.word;
	var multi = Number(req.params.num);
	var finalString = "";
	for (var i = 0; i < multi ; i++) {
		finalString = finalString + word + " ";
	}

	res.send(finalString);
})

app.get("*", function(res, req) {
	res.send("Sorry, page not found... What are you doing with your life?");
})

app.listen(3000, function() {
	console.log("Serving app on port 3000");
});