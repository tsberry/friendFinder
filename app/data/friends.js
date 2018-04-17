var fs = require("fs");

var path = "./app/data/friends.json";
// var path = "./friends.json";

var friends = [
    {
        "name": "Daenerys Targaryen",
        "photo": "https://cdn4.techly.com.au/wp-content/uploads/2017/08/danytargaryen-799x423.jpg",
        "scores": [5, 1, 3, 1, 5, 1, 5, 5, 5, 3]
    },
    {
        "name": "Jon Snow",
        "photo": "https://vignette.wikia.nocookie.net/gameofthrones/images/1/17/Jon-Snow-Kit-Harington_510.jpeg",
        "scores": [3, 3, 5, 1, 5, 1, 5, 5, 5, 5]
    },
    {
        "name": "Ned Stark",
        "photo": "https://nerdist.com/wp-content/uploads/2017/05/ned-stark-game-of-thrones.jpg",
        "scores": [
            1,
            4,
            5,
            5,
            3,
            1,
            1,
            1,
            5,
            5
        ]
    }];

// function getFriends(callback) {
//     fs.readFile(path, "utf8", function (err, data) {
//         if (err) throw err;
//         else {
//             callback(JSON.parse(data));
//         }
//     });
// }

// function addFriend(friend, callback) {
//     fs.readFile(path, "utf8", function (err, data) {
//         if (err) throw err;
//         else {
//             var obj = JSON.parse(data);
//             obj.friends.push(friend);
//             fs.writeFile("./app/data/friends.json", JSON.stringify(obj), "utf8", function (err) {
//                 if (err) throw err;
//                 callback("Added friend!");
//             });
//         }
//     })
// }

function bestMatch(name) {
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
    return min;
}

// function bestMatch(name, callback) {
//     fs.readFile(path, "utf8", function (err, data) {
//         if (err) throw err;
//         var friends = JSON.parse(data).friends;
//         var scores;
//         for (var i = 0; i < friends.length; i++) {
//             if (friends[i]["name"] === name) {
//                 scores = friends[i]["scores"];
//                 break;
//             }
//         }
//         var min;
//         var minDiff = 200;
//         for (var j = 0; j < friends.length; j++) {
//             if (friends[j]["name"] !== name) {
//                 var diff = difference(friends[j]["scores"], scores);
//                 if (diff < minDiff) {
//                     minDiff = diff;
//                     min = friends[j];
//                 }
//             }
//         }
//         callback(min, minDiff);
//     });
// }

function difference(a, b) {
    var difference = 0;
    for (var i = 0; i < a.length; i++) {
        difference += Math.abs(a[i] - b[i]);
    }
    return difference;
}

module.exports = {
    // getFriends: getFriends,
    // addFriend: addFriend,
    bestMatch: bestMatch,
    friends: friends
}