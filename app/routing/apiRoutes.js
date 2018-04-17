var friends = require("../data/friends.js");
var getFriends = friends.getFriends;
var addFriend = friends.addFriend;
var bestMatch = friends.bestMatch;
var array = friends.friends;
var bodyParser = require("body-parser");

apiRoutes = {
    getRoute: function (app) {
        app.get("/api/friends", function (req, res) {
            // return res.json(array);
            getFriends(function(data) {res.json(data)});
        });
    },
    postRoute: function (app) {
        app.post("/api/friends", function (req, res) {
            var friend = req.body;
            var name = req.body.name;
            console.log(friend);
            addFriend(friend, function (data) { bestMatch(name, function (data) { res.json(data); }); });
            // array.push(friend);
            // res.json(friend);
        });
    }
};

module.exports = apiRoutes;