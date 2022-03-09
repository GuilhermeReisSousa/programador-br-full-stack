var video = document.getElementById("video");

function pausar() {
  video.pause();
}

function play() {
  video.play();
}

function aumenta_vel() {
  video.playbackRate += 0.25;
}

function diminuri_vel() {
  video.playbackRate -= 0.25;
}

function showControls() {
  controls.style.bottom = "0%";
  videoContainer.addEventListener("mouseleave", function () {
    controls.style.bottom = "-20%";
  });
}
