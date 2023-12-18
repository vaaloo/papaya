let button = document.getElementById("burger");
let menu = document.querySelector(".navbar-burger");

button.addEventListener("click", () => {
    menu.classList.toggle("show");
});