let imgEl = document.querySelectorAll(".container img");
const imgContainer = document.querySelector(".imgContainer");

const left = document.querySelector(".left");
const right = document.querySelector(".right");

let currentImage = 0;
let value = currentImage * -600;

function slideRight() {
  if (currentImage < imgEl.length) {
    currentImage++;
    value = currentImage * -600;
    imgContainer.style.transform = `translateX(${value}px)`;
  }
  if (currentImage === imgEl.length) {
    currentImage = 0;
    value = currentImage * -600;
    imgContainer.style.transform = `translateX(${value}px)`;
  }
}
function slideLeft() {
  if (currentImage > 0) {
    currentImage--;
    value = currentImage * -600;

    imgContainer.style.transform = `translateX(${value}px)`;
  }
  if (currentImage < 0) {
    currentImage = imgEl.length - 1;
    value = currentImage * -600;
    imgContainer.style.transform = `translateX(${value}px)`;
  }
}

right.addEventListener("click", () => {
  slideRight();
  clearInterval(1);
});
left.addEventListener("click", () => {
  slideLeft();
  clearInterval(1);
});

const id = setInterval(() => {
  slideRight();
}, 3000);
