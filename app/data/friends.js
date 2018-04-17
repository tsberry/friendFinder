var fs = require("fs");

var path = "./app/data/friends.json";
// var path = "./friends.json";

function getFriends(callback) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) throw err;
        else {
            callback(JSON.parse(data));
        }
    });
}

function addFriend(friend, callback) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) throw err;
        else {
            var obj = JSON.parse(data);
            obj.friends.push(friend);
            fs.writeFile("./app/data/friends.json", JSON.stringify(obj), "utf8", function (err) {
                if (err) throw err;
                callback("Added friend!");
            });
        }
    })
}

function bestMatch(name, callback) {
    fs.readFile(path, "utf8", function (err, data) {
        if (err) throw err;
        var friends = JSON.parse(data).friends;
        var scores;
        for (var i = 0; i < friends.length; i++) {
            if (friends[i]["name"] === name) {
                scores = friends[i]["scores"];
                break;
            }
        }
        var min;
        var minDiff = 200;
        for (var j = 0; j < friends.length; j++) {
            if (friends[j]["name"] !== name) {
                var diff = difference(friends[j]["scores"], scores);
                if (diff < minDiff) {
                    minDiff = diff;
                    min = friends[j];
                }
            }
        }
        callback(min, minDiff);
    });
}

function difference(a, b) {
    var difference = 0;
    for (var i = 0; i < a.length; i++) {
        difference += Math.abs(a[i] - b[i]);
    }
    return difference;
}

module.exports = {
    getFriends: getFriends,
    addFriend: addFriend,
    bestMatch: bestMatch
}