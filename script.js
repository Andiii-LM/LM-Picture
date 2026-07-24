// ================================
// MENU HAMBURGER
// ================================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ================================
// TUTUP MENU SETELAH KLIK LINK
// ================================

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// ================================
// TOMBOL EXPLORE GALLERY
// ================================

const exploreBtn = document.getElementById("explore");

exploreBtn.addEventListener("click", () => {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
});

// ================================
// ANIMASI SCROLL
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("fade");
    observer.observe(section);
});

// ================================
// FORM CONTACT
// ================================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Terima kasih. Pesan Anda berhasil dikirim.");

    form.reset();

});

// ================================
// HEADER SAAT SCROLL
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.75)";
        header.style.boxShadow = "none";

    }

});
