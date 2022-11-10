const color = document.querySelector("#color");
const bodyEl = document.body;
const label = document.querySelector(".container label");
const rgbValue = document.querySelector(".rgbColor");

bodyEl.style.background = color.value;

// let hex = "#864141";

color.addEventListener("input", () => {
  let hex = color.value;
  let a = hex[1] + hex[2];
  let x = hex[3] + hex[4];
  let c = hex[5] + hex[6];

  let r = parseInt(a, 16);
  let g = parseInt(x, 16);
  let b = parseInt(c, 16);
  label.innerText = color.value;
  bodyEl.style.background = label.innerText;
  rgbValue.innerText = `rgb(${r},${g},${b})`;
});
