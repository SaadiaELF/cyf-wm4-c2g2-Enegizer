function videoControls() {
  let startBtn = document.querySelector(".btn--play");
  let pauseBtn = document.querySelector(".btn--pause");
  let stopBtn = document.querySelector(".btn--stop");
  let video = document.querySelector(".e__card__video");

  startBtn.addEventListener("click", function (event) {
    event.preventDefault();
    video.contentWindow.postMessage(
      '{"event":"command","func":"' + "playVideo" + '","args":""}',
      "*"
    );
  });

    stopBtn.addEventListener("click", function (event) {
      event.preventDefault();
    video.contentWindow.postMessage(
      '{"event":"command","func":"' + "stopVideo" + '","args":""}',
      "*"
    );
  });

    pauseBtn.addEventListener("click", function (event) {
      event.preventDefault();
    video.contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  });
}

function getRandomCard() {
  let exerciseCards = document.querySelectorAll(".e__card");
  let randomIndex = Math.floor(Math.random() * exerciseCards.length);

  exerciseCards[randomIndex].classList.remove("e__card--hidden");
}
getRandomCard();
videoControls();
