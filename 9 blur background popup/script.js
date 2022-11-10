const buttonEl = document.querySelector(".btn");
const popUp = document.querySelector(".popcontainer");
const closeEl = document.querySelector(".close");
const blurEl = document.querySelector(".container");

buttonEl.addEventListener("click", () => {
  popUp.classList.add("active");
  blurEl.classList.add("blur");
});
closeEl.addEventListener("click", () => {
  popUp.classList.remove("active");
  blurEl.classList.remove("blur");
});
