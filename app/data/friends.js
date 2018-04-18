var fs = require("fs");

var path = "./app/data/friends.json";

var friends = [
    {
        "name": "Daenerys Targaryen",
        "photo": "https://cdn4.techly.com.au/wp-content/uploads/2017/08/danytargaryen-799x423.jpg",
        "scores": [
            5, 
            1, 
            3, 
            1, 
            5, 
            1, 
            5, 
            5, 
            5, 
            3]
    },
    {
        "name": "Jon Snow",
        "photo": "https://vignette.wikia.nocookie.net/gameofthrones/images/1/17/Jon-Snow-Kit-Harington_510.jpeg",
        "scores": [
            3,
            3,
            5,
            1,
            5,
            1,
            5,
            5,
            5,
            5]
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
    },
    {
        "name": "Cersei Lannister",
        "photo": "https://geekandsundry.com/wp-content/uploads/2016/02/Cersei-Lannister-game-of-thrones-33804391-1024-576.jpg",
        "scores": [
            1,
            5,
            1,
            1,
            1,
            5,
            1,
            5,
            1,
            1
        ]
    }
];

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

function difference(a, b) {
    var difference = 0;
    for (var i = 0; i < a.length; i++) {
        difference += Math.abs(a[i] - b[i]);
    }
    return difference;
}

module.exports = {
    bestMatch: bestMatch,
    friends: friends
}