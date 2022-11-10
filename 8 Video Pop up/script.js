const buttonEl = document.querySelector(".btn");
const closebtn = document.querySelector(".close");
const videopoppup = document.querySelector(".videopop");
const videoEl = document.querySelector("video");
console.log(videopoppup);

buttonEl.addEventListener("click", () => {
  videopoppup.classList.add("active");
  videoEl.autoplay();
});
closebtn.addEventListener("click", () => {
  videopoppup.classList.remove("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
