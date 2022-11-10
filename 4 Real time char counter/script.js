const textareaEl = document.getElementById("textarea");
const character = document.getElementById("character");
const remaining = document.getElementById("remaining");
let total = textareaEl.getAttribute("maxlength");
remaining.innerHTML = `Remaining words : ${total}`;
textareaEl.addEventListener("keyup", () => {
  let para = textareaEl.value;
  para = para.trim();
  const char = para.length;
  character.innerHTML = `Total character : ${char}`;
  remaining.innerHTML = `Remaining words : ${total - char}`;
});
