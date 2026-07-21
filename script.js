// ======================================
// LM Picture v1.0
// script.js
// ======================================

// ===============================
// MENU HAMBURGER
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

    });

}


// ===============================
// TUTUP MENU SAAT LINK DIKLIK
// ===============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// ===============================
// TOMBOL EXPLORE GALLERY
// ===============================

const exploreBtn = document.getElementById("explore");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        document.getElementById("gallery").scrollIntoView({

            behavior: "smooth"

        });

    });

}


// ===============================
// ANIMASI SCROLL
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.2

}

);

sections.forEach(section=>{

    section.classList.add("fade");

    observer.observe(section);

});


// ===============================
// HEADER EFFECT
// ===============================

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(window.scrollY>50){

        header.style.background="rgba(0,0,0,.85)";

    }

    else{

        header.style.background="rgba(0,0,0,.55)";

    }

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contact-form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Terima kasih 😊\n\nPesan Anda telah berhasil dikirim.\nLM Picture akan segera menghubungi Anda.");

contactForm.reset();

});

}