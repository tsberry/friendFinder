var friends = require("../data/friends.js");
var getFriends = friends.getFriends;
var addFriend = friends.addFriend;

apiRoutes = {
    getRoute: function(app) {
        app.get("/api/friends", function(req, res) {
            getFriends(function(data) {res.send(data);});
        });
    },
    postRoute: function(app) {
        app.post("/api/friends/submit", function(req, res) {
            addFriend({"name" : "Thomas3"}, function(data) {res.send(data);});
        });
    }
};

module.exports = apiRoutes;