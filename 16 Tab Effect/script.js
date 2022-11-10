const spanContainer = document.querySelector(".spanContainer");
const spans = document.querySelectorAll(".span");
const innerText = document.querySelectorAll(".innerText");

spanContainer.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  console.log(id);
  if (id) {
    spans.forEach((span) => {
      span.classList.remove("active");
    });
    event.target.classList.add("active");

    innerText.forEach((text) => {
      text.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
