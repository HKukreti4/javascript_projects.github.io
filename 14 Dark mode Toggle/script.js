const inputEl = document.getElementById("dark-mode");

const bodyEl = document.querySelector("body");
inputEl.checked = JSON.parse(localStorage.getItem("color"));

updateback();
function updateback() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
}
inputEl.addEventListener("click", () => {
  updateback();
  updateLocalstorage();
});

function updateLocalstorage() {
  localStorage.setItem("color", JSON.stringify(inputEl.checked));
}
