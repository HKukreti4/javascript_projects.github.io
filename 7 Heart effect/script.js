const bodyEl = document.body;

bodyEl.addEventListener("mousemove", (e) => {
  let xpos = e.offsetX;
  let ypos = e.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.pointerEvents = "none";
  spanEl.style.top = ypos + "px";
  spanEl.style.left = xpos + "px";
  const size = Math.random() * 50;
  spanEl.style.height = size + "px";
  spanEl.style.width = size + "px";
  bodyEl.appendChild(spanEl);
  setTimeout(() => {
    spanEl.remove();
  }, 2000);
});
