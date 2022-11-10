const containerEl = document.querySelector(".container");
const carrer = ["Freelancer", "Youtuber", "Web Developer", "Instructor"];
let carrerIndex = 0;
let cahracterIndex = 1;

function updateName() {
  cahracterIndex++;
  containerEl.innerHTML = `  <h1>Hello I am  ${
    carrer[carrerIndex].slice(0, 1) === "I" ? "an" : "a"
  }  ${carrer[carrerIndex].slice(0, cahracterIndex)}</h1>`;
  if (cahracterIndex === carrer[carrerIndex].length) {
    carrerIndex++;
    cahracterIndex = 0;
  }
  setTimeout(updateName, 300);
  if (carrerIndex === carrer.length) {
    carrerIndex = 0;
  }
}
updateName();
