const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    menuButton.classList.toggle("active");


    const isOpen =
        navLinks.classList.contains("active");


    menuButton.setAttribute(
        "aria-expanded",
        isOpen
    );

});


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuButton.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});