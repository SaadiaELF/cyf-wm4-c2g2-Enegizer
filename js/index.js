let exerciseCards = document.querySelectorAll(".e__card");
let randomIndex = Math.floor(Math.random() * exerciseCards.length);

exerciseCards[randomIndex].classList.remove("e__card--hidden");
