const numberEl = document.querySelectorAll(".numbtn");
const operatorEl = document.querySelectorAll(".operator button");
const buttons = document.querySelectorAll(".functions button");
const outputEl = document.querySelector(".outputbox");
let inputVal = "";
buttons.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      inputVal = eval(inputVal);
      outputEl.value = inputVal;
      inputVal = "";
    } else if (e.target.innerHTML === "c") {
      inputVal = "";
      outputEl.value = inputVal;
    } else if (e.target.innerHTML === "del") {
      console.log(inputVal.length);
      inputVal = inputVal.slice(0, inputVal.length - 1);
      outputEl.value = inputVal;
    } else {
      inputVal = inputVal + e.target.innerHTML;
      outputEl.value = inputVal;
    }
  });
});
