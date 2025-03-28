var p1Score = 0;
var p2Score = 0;

function rollDice(){
    var randomNumber1 = Math.random();
    randomNumber1 = randomNumber1 * 6 + 1;
    randomNumber1 = Math.floor(randomNumber1);

    var randomNumber2 = Math.random();
    randomNumber2 = randomNumber2 * 6 + 1;
    randomNumber2 = Math.floor(randomNumber2);


    if (randomNumber1 === 1){
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber1 == 2) {
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber1 == 3) {
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    } else if (randomNumber1 == 4) {
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber1 == 5) {
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    } else {
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }

    if (randomNumber2 === 1){
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    } else if (randomNumber2 == 2) {
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber2 == 3) {
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    } else if (randomNumber2 == 4) {
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber2 == 5) {
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    } else if (randomNumber2 == 6) {
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 Wins!";
        addScore(1)
    } else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").textContent = "Player 2 Wins!";
        addScore(2);
    } else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = "Its a Tie!";
    }
}

function addScore(winner) {
    if(winner === 1){
        p1Score++;
        document.getElementsByTagName("p")[0].innerHTML = "Player 1 Score: " + p1Score;
    } else if (winner == 2){
        p2Score++;
        document.getElementsByTagName("p")[1].innerHTML = "Player 2 Score: " + p2Score;
    }
}

function reset(){
    p1Score = 0;
    p2Score = 0;
    document.getElementsByTagName("p")[0].innerHTML = "Player 1 Score: " + p1Score;
    document.getElementsByTagName("p")[1].innerHTML = "Player 2 Score: " + p2Score;
}
