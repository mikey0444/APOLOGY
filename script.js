function forgiveMe() {
  const messages = [
    "You forgave me 🥹💕 I promise to be better.",
    "Thank you, my love 💞 I won’t mess this up again.",
    "You mean everything to me ❤️",
    "I love you more than anything or anyone 💖 Thank you."
  ];
  const result = document.getElementById("result");
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  result.textContent = randomMsg;
}

// Auto-play music when user clicks anywhere once (browser-friendly)
window.addEventListener('click', function () {
  const music = document.getElementById("bgmusic");
  if (music) {
    music.play();
  }
}, { once: true });