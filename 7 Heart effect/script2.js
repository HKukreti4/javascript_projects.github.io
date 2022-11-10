const bodyEl = document.body;
const spanEl = document.querySelector(".mousebg");
bodyEl.addEventListener("mousemove", (e) => {
  let xpos = e.offsetX;
  let ypos = e.offsetY;
  spanEl.style.top = ypos + "px";
  spanEl.style.left = xpos + "px";
});

bodyEl.addEventListener("mousedown", () => {
  spanEl.style.opacity = "0.2";
});
bodyEl.addEventListener("mouseup", () => {
  spanEl.style.opacity = "1";
});
