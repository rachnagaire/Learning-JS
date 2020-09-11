
function rpsGame(humanChoice) {
    var userChoice, botChoice;
    userChoice = humanChoice.id;
    botChoice = computerChoice(random());
    var score = decideWinner(userChoice, botChoice);
    var messageResult = message(score);
    viewResult(messageResult, userChoice, botChoice, score);

}
function random() {
    var randomPicker = Math.floor(Math.random() * 3);
    console.log(randomPicker);
    return randomPicker;

}
function computerChoice(random) {
    var gameItems = ["rock", "paper", "scissor"];
    return gameItems[random];

}

function decideWinner(humanChoice, computerChoice) {
    var rpsDatabase = {
        rock: { scissor: 1, rock: 0.5, paper: 0 },
        paper: { rock: 1, paper: 0.5, scissor: 0 },
        scissor: { paper: 1, scissor: 0.5, rock: 0 }
    }
    var result = rpsDatabase[humanChoice][computerChoice];

    return result;
}

function message(score) {
    if (score === 1) {
        return {
            class: ["text-success", "border-success",],
            text: "You Won"
        }
    }
    else if (score === 0.5) {
        return {
            class: ["text-warning", "border-warning"],
            text: "Its a tie"
        }

    }
    else {
        return {
            class: ["text-failure", "border-failure"],
            text: "You lose"
        }

    }


}

function viewResult(message, humanChoice, computerChoice, score) {

    var imagesDatabase = {
        rock: document.getElementById("rock").firstChild.src,
        paper: document.getElementById("paper").firstChild.src,
        scissor: document.getElementById("scissor").firstChild.src
    }

    document.getElementById('player-call').firstChild.src = imagesDatabase[humanChoice];
    document.getElementById('computer-call').firstChild.src = imagesDatabase[computerChoice];

    document.getElementById('message').classList.add(...message["class"]);
    document.getElementById('message').innerHTML = message["text"];

    winCount(score);

    document.getElementById('result').hidden = false;
    document.getElementById('selector').hidden = true;

}

document.getElementById('btn-newGame').addEventListener('click', function () {

    newGame();

});

function newGame() {
    var resultView = document.getElementById('result');
    var selectorView = document.getElementById('selector');

    resultView.hidden = true;
    selectorView.hidden = false;

}

function winCount(score) {
    var playerCount = document.getElementById('player-count');
    var computerCount = document.getElementById('computer-count');

    var playerValue = parseInt(playerCount.innerText);
    var computerValue = parseInt(computerCount.innerText);

    if (score === 1) {
        playerValue++;
        playerCount.innerHTML = playerValue;
    }
    else {
        if (score === 0) {
            computerValue++;
            computerCount.innerHTML = computerValue;
        }
    }





}




