var express        =        require("express");
var bodyParser     =        require("body-parser");
var app            =        express();
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
	

app.set('view engine', 'ejs');

app.get("/", function(req, res){
	res.send("Hi");
});

app.get("/myRoute", function(req, res){
	res.render("index", {param : "a param111"});
});

app.post("/postExample", function(req, res) {
	res.render("post", req.body);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});