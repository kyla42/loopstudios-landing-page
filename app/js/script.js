const menuBtn = document.getElementById("hb-menu");
const closeBtn = document.getElementById("hb-close");
const hero = document.querySelector(".hero-header");

menuBtn.addEventListener("click", function () {
    hero.classList.add("active");
})

closeBtn.addEventListener("click", function () {
    hero.classList.remove("active");
})