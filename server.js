var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// Sets up our express server
var app = express();

// Set up a port number and process.env is for Heroku deployment
var PORT = process.env.PORT || 3306;

// Body-parser code 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


// Listener function
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});