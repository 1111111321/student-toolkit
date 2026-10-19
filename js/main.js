/* ===================================================
   三角洲资料站 · 交互脚本框架
   三个功能，每个都只写好了"监听器"，具体逻辑是 TODO。
   写的时候每完成一个就刷新页面测一次。
   =================================================== */

/* ---------- 1. 手机端菜单 ---------- */
const menuToggle = document.querySelector('#menuToggle');
const siteNav = document.querySelector('#site-nav');

menuToggle.addEventListener('click', () => {
  // TODO ①：给 siteNav 切换 'open' 类（提示：classList.toggle）
  // TODO ②：同步按钮状态，方便读屏软件知道菜单是开是关
  //         提示：const isOpen = siteNav.classList.contains('open');
  //               menuToggle.setAttribute('aria-expanded', isOpen);
});

/* ---------- 2. 深色模式 ---------- */
const themeToggle = document.querySelector('#themeToggle');

themeToggle.addEventListener('click', () => {
  // TODO ③：给 body 切换 'dark' 类（CSS 里已经写好了 .dark 的配色）
  // TODO ④：按钮文字在 🌙 和 ☀️ 之间切换，让人知道现在是哪种模式
  // TODO ⑤（进阶）：用户的选择存进 localStorage，刷新后还能记住
});

/* ---------- 3. 武器筛选 ---------- */
const filterButtons = document.querySelectorAll('.filter-btn');
const weaponRows = document.querySelectorAll('#weaponBody tr');
const filterHint = document.querySelector('#filterHint');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // TODO ⑥：把所有按钮的 aria-pressed 设为 "false"，再把自己设为 "true"
    // TODO ⑦：取出 btn.dataset.filter（就是 data-filter 的值）
    // TODO ⑧：遍历 weaponRows，如果 filter 是 'all' 全部显示；
    //          否则只有 row.dataset.type === filter 的显示，其余隐藏
    //          提示：row.hidden = true / false
    // TODO ⑨（进阶）：把"当前显示 N 把"写进 filterHint.textContent
  });
});
