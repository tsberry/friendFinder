var fs = require("fs");

function getFriends(callback) {
    fs.readFile("./app/data/friends.json", "utf8", function(err, data) {
        if(err) throw err;
        else {
            callback(JSON.parse(data));
        }
    });
}

function addFriend(friend, callback) {
    fs.readFile("./app/data/friends.json", "utf8", function(err, data) {
        if(err) throw err;
        else {
            var obj = JSON.parse(data);
            obj.friends.push(friend);
            fs.writeFile("./app/data/friends.json", JSON.stringify(obj), "utf8", function(err) {
                if(err) throw err;
                callback("Added friend!");
            });
        }
    })
}

module.exports = {
    getFriends: getFriends,
    addFriend: addFriend
}