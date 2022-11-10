const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");
  containerEl.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll(".color-container");

function randomColor() {
  let chars = "0123456789abcdef";
  let colorLength = 6;
  let color = "";

  for (let index = 0; index < colorLength; index++) {
    let colorGen = Math.floor(Math.random() * chars.length);
    colorCode = chars[colorGen];
    color = color + colorCode;
  }
  return color;
}

function genearateColor() {
  colorContainers.forEach((colorContainer) => {
    let newColorCode = randomColor();
    let bgcolor = "#" + newColorCode;
    colorContainer.innerHTML = bgcolor;
    colorContainer.style.background = bgcolor;
  });
}
genearateColor();
