const toTopButton = document.getElementById("to-top-button");

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTopButton.classList.add("active");
        } else {
            toTopButton.classList.remove("active");
        }
    });

    toTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });