// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var cat = require("../models/burger.js");