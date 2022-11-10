const masterPlay = document.querySelector(".masterPlay");
const songList = document.querySelector(".songList");
const progressBar = document.querySelector("#progressBar");
const bottomSongname = document.querySelector(".bottomSongName");
const gifImg = document.querySelector(".gif img");
const next = document.querySelector(".fa-forward-step");
const prev = document.querySelector(".fa-backward-step");
const musicList = [
  {
    name: "War Machine",
    cover: "sources/spotify.png",
    src: "music/Dryskill & Max Brhon - War Machine [NCS Release].mp3",
  },
  {
    name: "ReauBeau",
    cover: "sources/spotify.png",
    src: "music/ReauBeau - Wizkid feat. AVA NOVA [NCS Release].mp3",
  },
  {
    name: "Take It or Leave It",
    cover: "sources/spotify.png",
    src: "music/Aeden & Sketchez - Take It or Leave It [NCS Release].mp3",
  },
  {
    name: "War Machine",
    cover: "sources/spotify.png",
    src: "music/Dryskill & Max Brhon - War Machine [NCS Release].mp3",
  },
  {
    name: "ReauBeau",
    cover: "sources/spotify.png",
    src: "music/ReauBeau - Wizkid feat. AVA NOVA [NCS Release].mp3",
  },
  {
    name: "Take It or Leave It",
    cover: "sources/spotify.png",
    src: "music/Aeden & Sketchez - Take It or Leave It [NCS Release].mp3",
  },
];

musicList.forEach((music, id) => {
  const newList = document.createElement("div");
  newList.classList.add("songItem");
  newList.innerHTML = `
  <img src="./sources/spotify.png" alt="">
  <div class="songName">${music.name}</div>
  <div class="duration">3:40 min</div>
  <i class="fa-regular fa-2x fa-circle-play playIcon" id=${id}></i>
  `;
  songList.appendChild(newList);
});
const durationEl = document.querySelectorAll(".duration");
const songItem = document.querySelectorAll(".songItem");
console.log(songItem.length);
// playicon in list
const iEl = document.querySelectorAll(".playIcon");

let index = 0;
let playAudio = new Audio(musicList[index].src);

bottomSongname.innerText = musicList[index].name;
next.addEventListener("click", () => {
  gifImg.style.opacity = 1;
  songItem[index].style.background = "white";
  let time = playAudio.duration / 60;
  durationEl[index].innerText = time.toString().slice(0, 3) + "min";
  playAudio.pause();
  iEl[index].classList.add("fa-circle-play");
  iEl[index].classList.remove("fa-circle-pause");

  if (index >= songItem.length - 1) {
    index = 0;
  } else {
    index++;
  }
  playAudioIndex();
  playAudioCondition();
  gifImg.style.opacity = 1;

  bottomSongname.innerText = musicList[index].name;
  playAudio.addEventListener("timeupdate", () => {
    progressBar.value = (playAudio.currentTime / playAudio.duration) * 100;
  });
  if (playAudio.currentTime === playAudio.duration) {
    progressBar.value = 0;
    playAudio.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gifImg.style.opacity = 0;
  }
});

prev.addEventListener("click", () => {
  songItem[index].style.background = "white";
  playAudio.pause();
  iEl[index].classList.add("fa-circle-play");
  iEl[index].classList.remove("fa-circle-pause");
  playAudio.currentTime = 0;
  if (index <= 0) {
    index = songItem.length - 1;
  } else {
    index--;
  }
  playAudioIndex();
  playAudioCondition();
  bottomSongname.innerText = musicList[index].name;
  playAudio.addEventListener("timeupdate", () => {
    progressBar.value = (playAudio.currentTime / playAudio.duration) * 100;
  });
});

function playAudioIndex() {
  playAudio = new Audio(musicList[index].src);
}
playAudio = new Audio(musicList[index].src);

// clicking the master play button
masterPlay.addEventListener("click", () => {
  playAudioCondition();
});

// progress bar animation

progressBar.addEventListener("input", () => {
  playAudio.currentTime = (progressBar.value * playAudio.duration) / 100;
});

function playAudioCondition() {
  if (playAudio.currentTime <= 0) {
    masterPlay.classList.add("fa-circle-pause");
    masterPlay.classList.remove("fa-circle-play");
    iEl[index].classList.add("fa-circle-pause");
    songItem[index].style.background = "#0ed393";
    iEl[index].classList.remove("fa-circle-play");
    playAudio.play();

    gifImg.style.opacity = 1;
  } else {
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    iEl[index].classList.add("fa-circle-play");
    iEl[index].classList.remove("fa-circle-pause");
    playAudio.pause();
    songItem[index].style.background = "white";
    playAudio.currentTime = 0;
    gifImg.style.opacity = 0;
  }
}

playAudio.addEventListener("timeupdate", () => {
  if (playAudio.currentTime === playAudio.duration) {
    progressBar.value = 0;
    playAudio.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gifImg.style.opacity = 0;
  } else {
    progressBar.value = (playAudio.currentTime / playAudio.duration) * 100;
    gifImg.style.opacity = 1;
  }
});
