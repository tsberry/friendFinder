var fs = require("fs");

var htmlRoutes = {
    surveyRoute: function(app) {
        app.get("/survey", function(req, res) {
            var pathName = "/public/survey.html";
            res.sendFile(pathName, {root: __dirname.replace("routing", "")});
        });
    },
    defaultRoute: function(app) {
        app.get(function(req, res) {
            var pathName = "/public/home.html";
            res.sendFile(pathName, {root: __dirname.replace("routing", "")});
        })
    }
}


module.exports = htmlRoutes;