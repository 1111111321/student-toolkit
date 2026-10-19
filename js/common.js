/* ===================================================
   全站通用：手机菜单 + 深色模式
   每个页面都会引入这个文件。
   =================================================== */

/* ---------- 1. 手机端菜单 ---------- */
const menuToggle = document.querySelector('#menuToggle');
const siteNav = document.querySelector('#site-nav');

menuToggle.addEventListener('click', () => {
  // TODO ①：给 siteNav 切换 'open' 类（提示：classList.toggle('open')）
  // TODO ②：读出当前状态，写进按钮的 aria-expanded
  //          提示：siteNav.classList.contains('open') 返回 true / false
});

/* ---------- 2. 深色模式 ---------- */
const themeToggle = document.querySelector('#themeToggle');

themeToggle.addEventListener('click', () => {
  // TODO ③：给 document.body 切换 'dark' 类
  // TODO ④：把按钮文字在 '🌙' 和 '☀️' 之间切换
});
