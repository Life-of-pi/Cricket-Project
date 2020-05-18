document.addEventListener("DOMContentLoaded", function () {
    var el = document.getElementById("scoreboard-new-window");
    el.onclick = function () {
        // console.log("Winner");
        var TeamOneTotal = 0;
        var TeamOneScoreArray = [];
        var TeamOneArraySum = 0;
        var TeamTwoTotal = 0;
        var TeamTwoScoreArray = [];
        var TeamTwoArraySum = 0;
        var MaxOne = 0;
        var MaxTwo = 0;
        var ScoreDifference;
        var winner;
        var MaxScore;
        var MaxScorePlayerName;
        for (var i = 0; i < 10; i++) {
            // document.getElementById(`player-${i}-6`);
            var x = document.getElementById("player-" + i + "-6").value;
            TeamOneTotal += parseInt(x);
            TeamOneScoreArray.push(i); // i = 0,1,2,3..10
            TeamOneScoreArray.push(parseInt(x)); // TeamOneScoreArray = [25,16,0,12,....]
        }
        for (var i = 0; i < 10; i++) {
            var x = document.getElementById("player2-" + i + "-6").value;
            TeamTwoTotal += parseInt(x);
            TeamTwoScoreArray.push(i);
            TeamTwoScoreArray.push(parseInt(x));
        }
        var arrSum = function (arr) { return arr.reduce(function (a, b) { return a + b; }, 0); };
        // total score of team 1 + sum of Indexes
        TeamOneArraySum = arrSum(TeamOneScoreArray);
        // total sum of array of TeamTwoScoreArray
        TeamTwoArraySum = arrSum(TeamTwoScoreArray);
        // Find out winner
        if (TeamOneArraySum > TeamTwoArraySum) {
            console.log("Team 1 has Won!");
        }
        else {
            console.log("Team 2 has Won!");
        }
        // Find max from both arrays
        var arrMax = function (arr) { return Math.max.apply(Math, arr); };
        MaxOne = arrMax(TeamOneScoreArray);
        MaxTwo = arrMax(TeamTwoScoreArray);
        var index;
        if (MaxOne > MaxTwo) {
            index = TeamOneScoreArray[TeamOneScoreArray.indexOf(MaxOne) - 1];
            console.log("Player" + index + " from team 1 is Man of The Match!");
        }
        else {
            index = TeamTwoScoreArray[TeamTwoScoreArray.indexOf(MaxTwo) - 1];
            console.log("Player" + index + " from team 2 is Man of The Match!");
        }
    };
});
