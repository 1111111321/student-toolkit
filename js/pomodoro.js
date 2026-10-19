/* ===================================================
   番茄钟
   规则：专注 25 分钟 → 休息 5 分钟 → 循环
   =================================================== */

const FOCUS_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

const clock = document.querySelector('#clock');
const phase = document.querySelector('#phase');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');

let remaining = FOCUS_SECONDS;   // 还剩多少秒
let timerId = null;              // 计时器的编号，null 表示没在跑
let isFocus = true;              // 当前是否处于专注阶段

/* 把 remaining 显示成 25:00 这种格式 */
function render() {
  // TODO ①：算出分钟和秒
  //   const m = Math.floor(remaining / 60);
  //   const s = remaining % 60;
  // 然后拼成字符串，秒数不足两位要补零：String(s).padStart(2, '0')
  // 最后写进 clock.textContent
}

/* 每秒执行一次 */
function tick() {
  remaining -= 1;
  render();

  if (remaining <= 0) {
    // TODO ②：到点了，切换阶段
    //   如果 isFocus 是 true → 切成休息（isFocus = false，remaining = BREAK_SECONDS）
    //   否则切回专注
    //   同时更新 phase.textContent（'专注' / '休息'）
    //   并重新 render()
  }
}

startBtn.addEventListener('click', () => {
  // TODO ③：如果 timerId 是 null（说明没在跑），就 setInterval(tick, 1000)
  //          把返回的编号存进 timerId
  //          提示：不判断的话，连点两次会变成两倍速
});

pauseBtn.addEventListener('click', () => {
  // TODO ④：清除计时器：clearInterval(timerId)，然后把 timerId 设回 null
});

resetBtn.addEventListener('click', () => {
  // TODO ⑤：停表、回到专注阶段、remaining 重置成 FOCUS_SECONDS、render()
});

render();  // 页面一打开就显示 25:00
