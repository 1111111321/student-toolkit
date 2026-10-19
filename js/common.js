/* ===================================================
   Shared by every page: mobile menu + dark mode
   =================================================== */

/* ---------- 1. Mobile menu ---------- */
const menuToggle = document.querySelector('#menuToggle');
const siteNav = document.querySelector('#site-nav');

menuToggle.addEventListener('click', () => {
  // TODO 1: toggle the 'open' class on siteNav (hint: classList.toggle('open'))
  // TODO 2: read the new state and write it to the button's aria-expanded
  //         hint: siteNav.classList.contains('open') returns true / false
});

/* ---------- 2. Dark mode ---------- */
const themeToggle = document.querySelector('#themeToggle');

themeToggle.addEventListener('click', () => {
  // TODO 3: toggle the 'dark' class on document.body
  // TODO 4: switch the button label between '🌙' and '☀️'
});
