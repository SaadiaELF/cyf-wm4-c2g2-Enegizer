function hideMenu() {
  let menuOpen = document.querySelector("#h__side-menu").checked;

  if ((menuOpen = true)) {
    document.querySelector("#h__side-menu").checked = false;
  }
}
window.addEventListener("scroll", hideMenu);

// Functionalities of play/pause/stop buttons
function videoControls() {
  let startBtn = document.querySelectorAll(".btn--play");
  let pauseBtn = document.querySelectorAll(".btn--pause");
  let stopBtn = document.querySelectorAll(".btn--stop");
  let videos = document.querySelectorAll(".e__card__video");

  // Looping trough all the start buttons and applying the click event
  for (let i = 0; i < videos.length; i++) {
    startBtn[i].addEventListener("click", function () {
      videos[i].contentWindow.postMessage(
        '{"event":"command","func":"' + "playVideo" + '","args":""}',
        "*"
      );
    });
  }

  // Looping trough all the pause buttons and applying the click event
  for (let i = 0; i < videos.length; i++) {
    stopBtn[i].addEventListener("click", function () {
      videos[i].contentWindow.postMessage(
        '{"event":"command","func":"' + "stopVideo" + '","args":""}',
        "*"
      );
    });
  }

  // Looping trough all the stop buttons and applying the click event
  for (let i = 0; i < videos.length; i++) {
    pauseBtn[i].addEventListener("click", function () {
      videos[i].contentWindow.postMessage(
        '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
        "*"
      );
    });
  }
}
// Generate random card/exercise in every load
function getRandomCard() {
  let exerciseCards = document.querySelectorAll(".e__card");
  let randomIndex = Math.floor(Math.random() * exerciseCards.length);

  exerciseCards[randomIndex].classList.remove("e__card--hidden");
}
getRandomCard();
videoControls();


