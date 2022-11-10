const containerEl = document.querySelector(".container");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  containerEl.style.opacity = 1 - window.pageYOffset / 800;
  containerEl.style.backgroundSize = 160 - window.pageYOffset / 50 + "%";
}
