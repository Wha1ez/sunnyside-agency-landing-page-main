const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('visible-btn');
})