document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");
    const enterBtn = document.getElementById("enterBtn");
    const main = document.getElementById("mainContent");
    const music = document.getElementById("music");

    enterBtn.addEventListener("click", function () {
        intro.style.opacity = "0";

        setTimeout(() => {
            intro.style.display = "none";
            main.style.opacity = "1";
            music.play().catch(() => {});
        }, 1000);
    });

    /* CAROUSEL */
    let index = 0;
    const slides = document.querySelector(".slides");
    const total = document.querySelectorAll(".slide").length;
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");

    function updateSlide() {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    next.addEventListener("click", () => {
        index = (index + 1) % total;
        updateSlide();
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + total) % total;
        updateSlide();
    });

    setInterval(() => {
        index = (index + 1) % total;
        updateSlide();
    }, 5000);

    /* SWIPE */
    let startX = 0;

    slides.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    slides.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) next.click();
        if (endX - startX > 50) prev.click();
    });

    /* FLOATING HEARTS & PETALS */
    const container = document.getElementById("floating-container");

    function createFloating() {
        const el = document.createElement("div");
        el.classList.add("floating");
        el.innerHTML = Math.random() > 0.5 ? "💛" : "🌸";
        el.style.left = Math.random() * 100 + "vw";
        el.style.animationDuration = (5 + Math.random() * 5) + "s";
        container.appendChild(el);

        setTimeout(() => el.remove(), 9000);
    }

    setInterval(createFloating, 600);

    /* SPARKLE CURSOR */
    document.addEventListener("mousemove", e => {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.innerHTML = "✨";
        sparkle.style.left = e.clientX + "px";
        sparkle.style.top = e.clientY + "px";
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 700);
    });

});
