// ============================
// script.js
// ============================

// Reveal sections on scroll
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".section, .hero-inner").forEach((el) => {
    revealObserver.observe(el);
});

// Header background strengthens on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.style.background = "rgba(237,234,225,0.97)";
        header.style.boxShadow = "0 6px 20px rgba(20,33,61,.06)";
    } else {
        header.style.background = "rgba(237,234,225,.85)";
        header.style.boxShadow = "none";
    }
});

// Smooth reveal of hero on load
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-inner");
    if (hero) hero.classList.add("show");
});

console.log(
`Welcome 👋
Parag Bhanpiya — Reader's Ticket
Catalogued and built with care.
`
);
