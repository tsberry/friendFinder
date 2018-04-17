var friends = require("../data/friends.js");
var bestMatch = friends.bestMatch;
var array = friends.friends;
var bodyParser = require("body-parser");

apiRoutes = {
    getRoute: function (app) {
        app.get("/api/friends", function (req, res) {
            return res.json(array);
        });
    },
    postRoute: function (app) {
        app.post("/api/friends", function (req, res) {
            var friend = req.body;
            var name = req.body.name;
            var scores = req.body.scores;
            for (var i = 0; i < scores.length; i++) {
                scores[i] = parseInt(scores[i]);
            }
            console.log(friend);
            array.push(friend);

            return res.json(bestMatch(name));
        });
    }
};

module.exports = apiRoutes;