var friends = require("../data/friends.js");

apiRoutes = {
    getRoute: function(app) {
        app.get("/api/friends", function(req, res) {
            res.json(friends);
        });
    },
    postRoute: function(app) {
        app.post("/api/friends", function(req, res) {
        });
    }
};

module.exports = apiRoutes;