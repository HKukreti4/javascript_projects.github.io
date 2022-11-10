const nameEl = ["crash", "kick", "snare", "tom"];
const imageContainer = document.querySelector(".image-container");
nameEl.forEach((sound) => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.classList.add(sound);
  imageContainer.appendChild(box);
  const spanEl = document.createElement("span");
  spanEl.innerText = sound;
  const audioEl = document.createElement("audio");
  audioEl.src = "sound/" + sound + ".mp3";
  box.appendChild(spanEl);
  box.appendChild(audioEl);
  spanEl.addEventListener("click", () => {
    audioEl.play();
    box.style.transform = "scale(1.2)";
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === sound[0]) {
      audioEl.play();
      box.style.transform = "scale(1.2)";
    }
  });
  setInterval(() => {
    box.style.transform = "scale(1)";
  }, 500);
});
