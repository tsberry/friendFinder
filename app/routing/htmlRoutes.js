var path = require("path");

var htmlRoutes = {
    surveyRoute: function(app) {
        app.get("/survey", function(req, res) {
            var pathName = "/public/survey.html";
            res.sendFile(path.join(__dirname, "..", pathName));
        });
    },
    defaultRoute: function(app) {
        app.get("*", function(req, res) {
            var pathName = "/public/home.html";
            res.sendFile(path.join(__dirname, "..", pathName));
        })
    }
}


module.exports = htmlRoutes;