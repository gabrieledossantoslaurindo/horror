const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");

function playAudio() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Parar Música";
  } else {
    audio.pause();
    playButton.textContent = "Reproduzir Música";
  }
}

function nextpage() {
    window.location.href = "proxima_pagina.html"; // Substitua por nome do seu arquivo html
}