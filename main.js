const header = document.querySelector(".site-header");
const navToggle = document.getElementById("navToggle");
const mobileNav = document.getElementById("mobileNav");
const yearEl = document.getElementById("year");

if (yearEl) yearEl.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
});

navToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("is-open");
    mobileNav.hidden = !open;
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        mobileNav.hidden = true;
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
    });
});

document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Hook this form up to Formspree, Netlify Forms, or your backend.");
});
