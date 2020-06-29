var drums = document.querySelectorAll(".drum");

drums.forEach((element) => {
  element.addEventListener("click", function () {
    var drumLetter = this.innerHTML;
    playSound(drumLetter);
    animateButton(drumLetter);
  });
});

document.addEventListener("keydown", function (event) {
  var drumLetter = event.key;
  playSound(drumLetter);
  animateButton(drumLetter);
});

function playSound(drumLetter) {
  if (drumLetter == "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (drumLetter == "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (drumLetter == "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (drumLetter == "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (drumLetter == "j") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (drumLetter == "k") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (drumLetter == "l") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}

function animateButton(drumLetter) {
  var activeButton = document.querySelector("." + drumLetter);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
