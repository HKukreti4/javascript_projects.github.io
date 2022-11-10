const imageContainerEl = document.querySelector(".image-container");
const buttonEl = document.querySelector(".btn");

buttonEl.addEventListener("click", () => {
  addNewImage();
});

function addNewImage() {
  for (let index = 0; index < 6; index++) {
    let x = Math.floor(Math.random() * 1000);
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${x}`;
    imageContainerEl.appendChild(newImage);
  }
}
