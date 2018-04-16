var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var surveyRoute = htmlRoutes.surveyRoute;
var defaultRoute = htmlRoutes.defaultRoute;
var getRoute = apiRoutes.getRoute;
var postRoute = apiRoutes.postRoute;

var app = express();
var PORT = 7000;

defaultRoute(app);
surveyRoute(app);
getRoute(app);
postRoute(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});