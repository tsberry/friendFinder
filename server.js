var express = require("express");
var bodyParser = require("body-parser");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var surveyRoute = htmlRoutes.surveyRoute;
var defaultRoute = htmlRoutes.defaultRoute;
var getRoute = apiRoutes.getRoute;
var postRoute = apiRoutes.postRoute;

var app = express();
var PORT = process.env.PORT || 7000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

surveyRoute(app);
getRoute(app);
postRoute(app);
defaultRoute(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});