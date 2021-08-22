document.addEventListener("DOMContentLoaded", () => {
    wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 300,
        mobile: true,
        live: true,
    });
    wow.init();

    const collapse = document.getElementById("collapse");
    const navbar = document.getElementById("navbar");
    collapse.addEventListener("click", () => {
        collapse.classList.toggle("active");
        if (collapse.classList.contains("active")) {
            // navbar.style.maxHeight =
            //     navbar.querySelectorAll(".nav-link").length * 40 + "px";
            navbar.style.maxHeight = navbar.scrollHeight + "px";
        } else {
            navbar.style.maxHeight = 0 + "px";
        }
    });

    document.addEventListener("click", (e) => {
        if (!header.contains(e.target)) {
            collapse.classList.remove("active");
            navbar.classList.remove("active");
        }
    });

    const scrollToTop = document.getElementById("scroll-to-top");
    scrollToTop.onclick = () => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };
});
