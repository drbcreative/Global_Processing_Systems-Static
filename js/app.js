const navToggle = document.querySelector("#nav-toggle"),
  navMenu = document.querySelector(".nav-menu");

// Event Listener
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

window.addEventListener("resize", () => {
  winWidth = window.innerWidth;
  if (winWidth > 992) {
    navMenu.classList.remove("show");
  }
});
