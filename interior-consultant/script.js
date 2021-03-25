const button = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-ul");
button.addEventListener("click", () => {
  button.classList.toggle("open");
  nav.classList.toggle("show");
});
