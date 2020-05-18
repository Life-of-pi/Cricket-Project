
let hitOne = document.getElementById("hit-1");
let hitTwo = document.getElementById("hit-2");

// Run event listner only once
function RunEvenOnce(el, type, fn) {
    function handler(event) {
        el.removeEventListener(type, handler);
        fn(event);
    }
    el.addEventListener(type, handler);
}

// add event listner
RunEvenOnce(hitOne, 'click', SelectElement);
RunEvenOnce(hitTwo, 'click', SelectElement);


// check which elemetn is clicked
let clickedElement;
function SelectElement() {

    if (event.target === hitOne) {
        console.log('You have hit 1 true');
        clickedElement = event.target;
        CountDown(clickedElement);
    }
    if (event.target === hitTwo) {
        console.log('You have hit 2 true');
        clickedElement = event.target;
        CountDown(clickedElement);
        if (playerRow === 10 && playerBall === 0) {
            console.log("Hit-2 true");
            playerRow = 0;  // i = playerRow
             playerBall = 0; // j = playerBall
             totalScore = 0;
            TeamScore1 = 0;
            ballsLeft = 60;
        }
    }
}

// Countdown starts from 60 and displayed it on screen
function CountDown(clickedElement) {
    document.getElementById("timer-over").style.display = "none";       // toggle between timer and timesUP
    document.getElementById("timer-running").style.display = "block";

    clickedElement.classList.remove("disabled");
    let counter = 50;
    const timer = setInterval(() => {

        if (counter < 1) {
            clearInterval(timer);

            document.getElementById("timer-running").style.display = "none";        // toggle between timer and timesUP
            document.getElementById("timer-over").style.display = "block";

            console.log("disabled");
            clickedElement.classList.add("disabled");
            if (clickedElement === document.getElementById("hit-1")) {
                document.getElementById("hit-2").classList.remove("disabled");
            }
        }

        document.getElementById('timer').innerHTML = counter.toString();
        // console.log(counter);
        counter--;
    }, 1000);
}


// events for adding score
hitOne.addEventListener("click", DisplayScore);
hitTwo.addEventListener("click", DisplayScore);

// function RandomScore() {
//     let x = Math.floor(Math.random() * 7);
//     return x;
// }

var playerRow = 0;  // i = playerRow
var playerBall = 0; // j = playerBall
var totalScore = 0;
var TeamScore1 = 0;
var TeamScore2 = 0;
var score: number;
var ballsLeft = 60;
// var MaxScoreTeam1 = 0;  // maximum score from player in Team 1 
// var MaxScorePlayerTag1 = 'Player' + playerRow; // name of player with maximum runs
let score_scorecard_id;
let balls_left_id;
let player_id;

var audio = new Audio('../sfx/ball-hit.mp3');
var batsman = document.getElementById("batsman-1");

function DisplayScore() {
    let element = event.target;
    audio.play();                                  
    batsman.setAttribute("src","bat2.png");
    setTimeout(()=>{
        batsman.setAttribute("src","Bat1.png"); 
    },500);                                                                                                 
    // console.log((<HTMLInputElement>element).id);
    // console.log(typeof `player-${playerRow}-${playerBall}`);
    if ((<HTMLInputElement>element).id === "hit-1") {
        score_scorecard_id = "score-scorecard";
        balls_left_id = "balls-left-scorecard"
        player_id = "player";
    }
    if ((<HTMLInputElement>element).id === "hit-2") {
        score_scorecard_id = "score-scorecard2";
        balls_left_id = "balls-left-scorecard2"
        player_id = "player2";
    }
    // console.log(`player -id = ${player_id}`);

    score = Math.floor(Math.random() * 7);
    if (score === 5) {
        DisplayScore();
    }

    if (score > 0 && playerRow < 10 && playerBall < 7) {
        if (playerBall < 6) {
            // console.log('TeamScore1 = ' + TeamScore1);
            TeamScore1 += score;
            document.getElementById(`${score_scorecard_id}`).innerHTML = TeamScore1.toString();
            document.getElementById(`${balls_left_id}`).innerHTML = ballsLeft.toString();
            document.getElementById(`${player_id}-${playerRow}-${playerBall}`).innerHTML = score.toString();
            totalScore += score;
            // TeamScore1 +=score;
            playerBall++;
            ballsLeft--;
        } else if (playerBall === 6) {
            document.getElementById(`${score_scorecard_id}`).innerHTML = TeamScore1.toString();
            document.getElementById(`${player_id}-${playerRow}-6`).innerHTML = totalScore.toString();
            totalScore = 0;
            playerBall = 0;
            playerRow++;
        }
    } else if (score === 0 && playerRow < 10 && playerBall < 7) {
        document.getElementById(`${score_scorecard_id}`).innerHTML = TeamScore1.toString();
        document.getElementById(`${balls_left_id}`).innerHTML = ballsLeft.toString();
        document.getElementById(`${player_id}-${playerRow}-6`).innerHTML = totalScore.toString();
        totalScore = 0;
        playerBall = 0;
        playerRow++;
        ballsLeft--;
    }
}

// if(playerBall ===6 && playerRow===9){
//     console.log("Hello");
//     console.log("playerRow = "+playerRow + " playerBall = "+playerBall);
//     document.getElementById("hit-1").classList.add("disabled");
// }