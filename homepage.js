window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});