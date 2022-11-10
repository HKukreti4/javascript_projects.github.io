const monthname = document.querySelector(".day h1");
const fulldate = document.querySelector(".day p");
const numberEl = document.querySelector(".number");
const next = document.querySelector(".next");
const prev = document.querySelector(".previous");
const dayname = new Date().getDay();
console.log(dayname);

let monthIndex = new Date().getMonth();
let fullDateVal = new Date();
let lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
let firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
console.log(firstDay);

next.addEventListener("click", () => {
  monthIndex++;
  if (monthIndex > 11) {
    monthIndex = monthIndex - 12;
    lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
    firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
    getCalender();
  } else {
    lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
    firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
    getCalender();
  }
});
prev.addEventListener("click", () => {
  console.log(monthIndex);
  if (monthIndex < 1) {
    console.log(monthIndex);
    monthIndex = monthIndex + 11;
    lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
    firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
    getCalender();
  } else {
    monthIndex--;
    lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
    firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
    getCalender();
  }
});
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getCalender() {
  let days = "";
  for (let index = firstDay; index > 0; index--) {
    days += `<div class="empty"></div>`;
  }
  for (let index = 1; index <= lastDay; index++) {
    if (index === new Date().getDate()) {
      days += `<div class="today">${index}</div>`;
    } else {
      days += `<div>${index}</div>`;
    }
  }

  monthname.innerText = months[monthIndex];
  fulldate.innerText = "Today   " + fullDateVal.toDateString();
  numberEl.innerHTML = days;
}
getCalender();
