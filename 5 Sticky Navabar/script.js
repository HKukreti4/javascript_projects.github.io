const navbarEl = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  const scrollVal = window.scrollY;
  if (scrollVal >= 120) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
