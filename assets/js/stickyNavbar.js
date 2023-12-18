let header = document.querySelector("header")
let burger = document.querySelector(".navbar-burger")

document.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0)
    burger.classList.toggle("sticky", window.scrollY > 0)
})