let startBtn = document.querySelectorAll(".btn--play");
let pauseBtn = document.querySelectorAll(".btn--pause");
let stopBtn = document.querySelectorAll(".btn--stop");
let videos = document.querySelectorAll(".e__card__video");

// Hide menu on mobile view after clicking on menu items
function hideMenu() {
  let menuOpen = document.querySelector("#h__side-menu").checked;

  if (menuOpen === true) {
    document.querySelector("#h__side-menu").checked = false;
  }
}

// Functionalities of play/pause/stop buttons
function videoControls() {
  // Looping trough all the start buttons and applying the click event
  for (let i = 0; i < videos.length; i++) {
    startBtn[i].addEventListener("click", function () {
      videos[i].contentWindow.postMessage(
        '{"event":"command","func":"' + "playVideo" + '","args":""}',
        "*"
      );
      playTimer();
    });
  }

  // Looping trough all the pause buttons and applying the click event
  for (let i = 0; i < videos.length; i++) {
    stopBtn[i].addEventListener("click", function () {
      videos[i].contentWindow.postMessage(
        '{"event":"command","func":"' + "stopVideo" + '","args":""}',
        "*"
      );
      resetTimer();
    });
  }

  // Looping trough all the stop buttons and applying the click event
  for (let i = 0; i < videos.length; i++) {
    pauseBtn[i].addEventListener("click", function () {
      videos[i].contentWindow.postMessage(
        '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
        "*"
      );
      pauseTimer();
    });
  }
}

// Generate random card/exercise in every load
function getRandomCard() {
  let exerciseCards = document.querySelectorAll(".e__card");
  let randomIndex = Math.floor(Math.random() * exerciseCards.length);

  exerciseCards[randomIndex].classList.remove("e__card--hidden");
}

//  Timer
let interval;
let timeLeft = 15 * 60;
let isPaused = true;
let timer = setInterval(function () {
  if (!isPaused) {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = Math.floor(timeLeft % 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    document.querySelector("#timer").innerHTML = `${minutes}:${seconds}`;

    if (timeLeft < 0) {
      resetTimer();
    }
    timeLeft--;
  }
}, 1000);

function playTimer() {
  isPaused = false;
}
function pauseTimer() {
  isPaused = true;
}
function resetTimer() {
  clearInterval(timer);
  document.querySelector("#timer").innerHTML = "00:00";
}

// Calling functions
window.addEventListener("scroll", hideMenu);
getRandomCard();
videoControls();
