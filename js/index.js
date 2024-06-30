// ! HTML elemnts
var allBox = Array.from(document.querySelectorAll(".col-4"));
var winnerCard = document.querySelector(".winner-card");
var playerOne = document.querySelector(".playerOne");
var PlayerTow = document.querySelector(".PlayerTow");
var firstPlayerScore = document.querySelector(".firstPlayerScore");
var secondPlayerScore = document.querySelector(".secondPlayerScore");
var myBtn = document.querySelector(".my-btn");
var xReadyIcon = document.querySelector(".xReadyIcon");
var oReadyIcon = document.querySelector(".oReadyIcon");
var winnerName = document.querySelector(".winner-name");
var yalaBena = document.querySelector(".yalaBena");
var WinnerAudio = document.querySelector(".WinnerAudio");

// * globel condatations and varebils
var counterScore = 1;
var firstPlayerCount = 0;
var secondPlayCount = 0;
var winnerPlay = "";
var firstPlayerInput = window.prompt("X player");
playerOne.innerHTML = firstPlayerInput;
var secondPlayerInput = window.prompt("O player");
PlayerTow.innerHTML = secondPlayerInput;
firstPlayerScore.innerHTML = firstPlayerCount;
secondPlayerScore.innerHTML = secondPlayCount;
xReadyIcon.classList.replace("d-none", "d-block");
chackPlayersNames();

// ? functions
// ^ Main Condations
for (var i = 0; i < allBox.length; i++) {
  allBox[i].addEventListener("click", function (e) {
    if (counterScore % 2 == 0) {
      e.target.innerHTML = "O";
      counterScore += 1;
      xReadyIcon.classList.replace("d-none", "d-block");
      oReadyIcon.classList.replace("d-block", "d-none");
    } else if (counterScore % 2 != 0) {
      e.target.innerHTML = "X";
      counterScore += 1;
      oReadyIcon.classList.replace("d-none", "d-block");
      xReadyIcon.classList.replace("d-block", "d-none");
    }
    if (
      (allBox[0].innerHTML == allBox[1].innerHTML &&
        allBox[1].innerHTML == allBox[2].innerHTML &&
        allBox[0].innerHTML != "" &&
        allBox[1].innerHTML != "" &&
        allBox[2].innerHTML != "") ||
      (allBox[3].innerHTML == allBox[4].innerHTML &&
        allBox[4].innerHTML == allBox[5].innerHTML &&
        allBox[3].innerHTML != "" &&
        allBox[4].innerHTML != "" &&
        allBox[5].innerHTML != "") ||
      (allBox[6].innerHTML == allBox[7].innerHTML &&
        allBox[7].innerHTML == allBox[8].innerHTML &&
        allBox[6].innerHTML != "" &&
        allBox[7].innerHTML != "" &&
        allBox[8].innerHTML != "") ||
      (allBox[0].innerHTML == allBox[3].innerHTML &&
        allBox[3].innerHTML == allBox[6].innerHTML &&
        allBox[0].innerHTML != "" &&
        allBox[3].innerHTML != "" &&
        allBox[6].innerHTML != "") ||
      (allBox[1].innerHTML == allBox[4].innerHTML &&
        allBox[4].innerHTML == allBox[7].innerHTML &&
        allBox[1].innerHTML != "" &&
        allBox[4].innerHTML != "" &&
        allBox[7].innerHTML != "") ||
      (allBox[2].innerHTML == allBox[5].innerHTML &&
        allBox[5].innerHTML == allBox[8].innerHTML &&
        allBox[2].innerHTML != "" &&
        allBox[5].innerHTML != "" &&
        allBox[8].innerHTML != "") ||
      (allBox[2].innerHTML == allBox[4].innerHTML &&
        allBox[4].innerHTML == allBox[6].innerHTML &&
        allBox[2].innerHTML != "" &&
        allBox[4].innerHTML != "" &&
        allBox[6].innerHTML != "") ||
      (allBox[0].innerHTML == allBox[4].innerHTML &&
        allBox[4].innerHTML == allBox[8].innerHTML &&
        allBox[0].innerHTML != "" &&
        allBox[4].innerHTML != "" &&
        allBox[8].innerHTML != "")
    ) {
      winnerPlay = e.target.innerHTML;
      clear();
      showWinnerCard();
      if (winnerPlay == "X") {
        firstPlayerCount++;
        firstPlayerScore.innerHTML = firstPlayerCount;
        winnerName.innerHTML = playerOne.innerHTML;
        winnerName.innerHTML = `${playerOne.innerHTML} is ${firstPlayerCount} / 3 <i class="fa-regular fa-face-sad-tear text-danger fa-beat"></i>`;
        disableMute();
      } else {
        secondPlayCount++;
        secondPlayerScore.innerHTML = secondPlayCount;
        winnerName.innerHTML = PlayerTow.innerHTML;
        winnerName.innerHTML = `${PlayerTow.innerHTML} is ${secondPlayCount} / 3 <i class="fa-regular fa-face-sad-tear text-danger fa-beat"></i>`;
        disableMute();
      }
      if (firstPlayerCount == 3) {
        firstPlayerCount = 0;
        secondPlayCount = 0;
        firstPlayerScore.innerHTML = firstPlayerCount;
        secondPlayerScore.innerHTML = secondPlayCount;
        myBtn.innerHTML = `New Game <i class="fa-solid fa-sync fa-spin text-success"></i>`;
        winnerName.innerHTML = `${playerOne.innerHTML} is Winner <i class="fa-solid fa-bounce fa-trophy text-warning"></i>`;
        WinnerAudio.play();
        enableMute();
      } else if (secondPlayCount == 3) {
        firstPlayerCount = 0;
        secondPlayCount = 0;
        firstPlayerScore.innerHTML = firstPlayerCount;
        secondPlayerScore.innerHTML = secondPlayCount;
        myBtn.innerHTML = `New Game <i class="fa-solid fa-sync fa-spin text-success"></i>`;
        winnerName.innerHTML = `${PlayerTow.innerHTML} is Winner <i class="fa-solid fa-bounce fa-trophy text-warning"></i>`;
        WinnerAudio.play();
        enableMute();
      }
      checkWhoIsWin(firstPlayerCount, playerOne);
      checkWhoIsWin(secondPlayCount, PlayerTow);
    } else if (
      allBox[0].innerHTML != "" &&
      allBox[1].innerHTML != "" &&
      allBox[2].innerHTML != "" &&
      allBox[3].innerHTML != "" &&
      allBox[4].innerHTML != "" &&
      allBox[5].innerHTML != "" &&
      allBox[6].innerHTML != "" &&
      allBox[7].innerHTML != "" &&
      allBox[8].innerHTML != ""
    ) {
      clear();
    }
  });
}

// ^Check  prompt Value
function chackPlayersNames() {
  if (firstPlayerInput == "") {
    playerOne.innerHTML = "Player X";
  }
  if (secondPlayerInput == "") {
    PlayerTow.innerHTML = "Player O";
  }
}

// ^Check Finle Score
function checkWhoIsWin(PlayCount, playName) {
  if (PlayCount == 3) {
    firstPlayerCount = 0;
    secondPlayCount = 0;
    firstPlayerScore.innerHTML = firstPlayerCount;
    secondPlayerScore.innerHTML = secondPlayCount;
    myBtn.innerHTML = `New Game <i class="fa-solid fa-sync fa-spin text-success"></i>`;
    winnerName.innerHTML = `${playName.innerHTML} is Winner <i class="fa-solid fa-bounce fa-trophy text-warning"></i>`;
    WinnerAudio.play();
    enableMute();
  }
}

// ^Disable Winner Crad
function disableWinnerCard() {
  winnerCard.classList.replace("d-flex", "d-none");
}

// ^Showing Winner Crad
function showWinnerCard() {
  winnerCard.classList.replace("d-none", "d-flex");
}

// ^Clear Squars
function clear() {
  for (var i = 0; i < allBox.length; i++) {
    allBox[i].innerHTML = "";
  }
}

// ^Disable Audio Sound
function enableMute() {
  yalaBena.muted = true;
}

// ^play Audio Sound
function disableMute() {
  yalaBena.play();
  yalaBena.muted = false;
}

// ~ Events
myBtn.addEventListener("click", function () {
  disableWinnerCard();
});
