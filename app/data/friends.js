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

function bestMatch(name, callback) {
    fs.readFile("./app/data/friends.json", "utf8", function(err, data) {
        if(err) throw err;
        var friends = JSON.parse(data).friends;
        for(var i = 0; i < friends.length; i++) {
            if(friends[i].name === name) {
                scores = friends[i].name;
                var min;
                var minDiff = 200;
                for(var i = 0; i < friends.length; i++) {
                    if(friends[i].name !== name) {
                        if(difference(friends[i], scores) < minDiff) {
                            minDiff = difference(friends[i], scores);
                            min = friends[i];
                        }
                    }
                }
            }
        }
        callback(min);
    });
}

function difference(a, b) {
    var difference = 0;
    for(var i = 0; i < a.length; i++) {
        difference += Math.abs(a[i] - b[i]);
    }
    return difference;
}

module.exports = {
    getFriends: getFriends,
    addFriend: addFriend,
    bestMatch: bestMatch
}