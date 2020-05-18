document.addEventListener("DOMContentLoaded", () => {
    var el = document.getElementById("scoreboard-new-window")

    el.onclick = () => {
        // console.log("Winner");

        let TeamOneTotal = 0;
        let TeamOneScoreArray = [];
        let TeamOneArraySum =0;

        let TeamTwoTotal = 0;
        let TeamTwoScoreArray = [];
        let TeamTwoArraySum =0;

        let MaxOne = 0;
        let MaxTwo = 0;

        let ScoreDifference;
        let winner;
        let MaxScore;
        let MaxScorePlayerName;

        for (let i = 0; i < 10; i++) {
            // document.getElementById(`player-${i}-6`);
            let x = (<HTMLInputElement>document.getElementById(`player-${i}-6`)).value;
            TeamOneTotal += parseInt(x);
            TeamOneScoreArray.push(i);  // i = 0,1,2,3..10
            TeamOneScoreArray.push(parseInt(x));  // TeamOneScoreArray = [25,16,0,12,....]
        }
        for (let i = 0; i < 10; i++) {
            let x = (<HTMLInputElement>document.getElementById(`player2-${i}-6`)).value;
            TeamTwoTotal += parseInt(x)
            TeamTwoScoreArray.push(i);
            TeamTwoScoreArray.push(parseInt(x));
        } 
        const arrSum = arr => arr.reduce((a,b) => a + b, 0);

        // total score of team 1 + sum of Indexes
        TeamOneArraySum  = arrSum(TeamOneScoreArray); 

        // total sum of array of TeamTwoScoreArray
        TeamTwoArraySum = arrSum(TeamTwoScoreArray);

        // Find out winner
        if(TeamOneArraySum > TeamTwoArraySum){
            console.log("Team 1 has Won!");
        }else{
            console.log("Team 2 has Won!");
        }

        // Find max from both arrays
        const arrMax = arr => Math.max(...arr);
        MaxOne = arrMax(TeamOneScoreArray);
        MaxTwo = arrMax(TeamTwoScoreArray);

        let index;
        if(MaxOne > MaxTwo){
            index = TeamOneScoreArray[TeamOneScoreArray.indexOf(MaxOne)-1];
            console.log("Player"+index+" from team 1 is Man of The Match!");
        }else{
            index = TeamTwoScoreArray[TeamTwoScoreArray.indexOf(MaxTwo)-1];
            console.log("Player"+index+" from team 2 is Man of The Match!");
        }

    };

});

