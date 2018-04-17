var friends = require("../data/friends.js");
var getFriends = friends.getFriends;
var addFriend = friends.addFriend;
var bestMatch = friends.bestMatch;
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false })

apiRoutes = {
    getRoute: function(app) {
        app.get("/api/friends", function(req, res) {
            getFriends(function(data) {res.send(data);});
        });
    },
    postRoute: function(app) {
        app.post("/api/friends/submit", urlencodedParser, function(req, res) {
            var name = req.body["name"];
            var arr = [];
            for(property in req.body) {
                if(property !== "name") arr.push(parseInt(req.body[property]));
            }
            addFriend({"name": name, "scores": arr}, function(data) {bestMatch(name, function(data) {res.send(data);});});
        });
    }
};

module.exports = apiRoutes;