var RPSrandom = ["Rock", "Scissors", "Paper"];
var randomnumber = Math.round(Math.random() * 2)
var botchoose = RPSrandom[randomnumber];
var game;
var scissors = "Scissors";
var paper = "Paper";
var rock = "Rock";
var nonreset = 0;
var points = 0
var wins = 0;
var draws = 0;
var loses = 0;
var games = 0;

function choose(choice){
    if (nonreset == 0){
        document.getElementById("playerchoice").innerHTML = "You chose " + choice;
        randomnumber = Math.round(Math.random() * 2)
        botchoose = RPSrandom[randomnumber];
        document.getElementById("botchoice").innerHTML = "Bot chose " + botchoose;
        if (choice == botchoose){
            game = "Drew";
            draws++
        }
        if (choice == "Rock" && botchoose == "Scissors") {
            game = "Won";
            points++
            wins++
        }
        if (choice == "Scissors" && botchoose == "Paper") {
            game = "Won";
            points++
            wins++
        }
        if (choice == "Paper" && botchoose == "Rock") {
            game = "Won";
            points++
            wins++
        }
        if (choice == "Scissors" && botchoose == "Rock") {
            game = "Lost";
            points--
            loses++
        }
        if (choice == "Paper" && botchoose == "Scissors") {
            game = "Lost";
            points--
            loses++
        }
        if (choice == "Rock" && botchoose == "Paper") {
            game = "Lost";
            points--
            loses++
        }
        games++
        if (points < 0){
            points = 0
        }
        document.getElementById("Points").innerHTML = "Points: " + points;
        document.getElementById("score").innerHTML = "You " + game;
        document.getElementById("count").innerHTML = "Wins: " + wins + ", Draws: " + draws + ", Loses: " + loses + ", Games: " + games;
    }
    nonreset = 1;
}
function reset(){
    nonreset = 0;
    document.getElementById("score").innerHTML = "";
    document.getElementById("botchoice").innerHTML = "";
    document.getElementById("playerchoice").innerHTML = "";
}