// Dependencies
var express = require('express');
// path is built into node- no install needed
// helps build the relative path for the html folder.
var path = require('path');

// Sets up the Express
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For serving of static CSS
app.use(express.static("/public"));


// API and HTML routes
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);


// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});