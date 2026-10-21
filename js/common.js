/* ===================================================
   Shared by every page: mobile menu + dark mode
   =================================================== */

/* ---------- 1. Mobile menu ---------- */

/* On wide screens this button is hidden by CSS, so this code simply
   never runs there. On narrow screens, tapping it opens the nav. */
const menuToggle = document.querySelector('#menuToggle');
const siteNav = document.querySelector('#site-nav');

menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');

  /* aria-expanded tells screen readers whether the menu is open.
     It must stay in sync with what the eyes can see. */
  const isOpen = siteNav.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

/* ---------- 2. Dark mode ---------- */

/* All the colours live in CSS variables, so switching theme is just
   adding one class to <body>. See :root and body.dark in style.css. */
const themeToggle = document.querySelector('#themeToggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );
});
