var friends = require("../app/data/friends.js");
// console.log(friends);

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        var user = req.body;

        var bestFriend = 0;
        var minDifference = 40;

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            console.log(friends[i].name);
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
                console.log(difference);
            }
            console.log("total: " + totalDifference);
            if (totalDifference < minDifference) {
                bestFriend = i;
                minDifference = totalDifference;
            }
        }

        console.log(friends[bestFriend]);

        friends.push(req.body);
        res.json(friends[bestFriend]);
    });
}