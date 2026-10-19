/* ===================================================
   考试倒计时
   关键：日期相减得到的是毫秒，要换算成天
   =================================================== */

const cdForm = document.querySelector('#cdForm');
const cdDate = document.querySelector('#cdDate');
const cdResult = document.querySelector('#cdResult');

cdForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO ①：把 cdDate.value（形如 "2026-12-20"）转成 Date 对象
  //          提示：new Date(cdDate.value)
  // TODO ②：取今天的日期，并且把时分秒归零
  //          提示：const today = new Date(); today.setHours(0, 0, 0, 0);
  // TODO ③：两个日期相减得到毫秒差，除以 (1000 * 60 * 60 * 24) 得到天数
  //          提示：用 Math.round 或 Math.ceil 取整
  // TODO ④：把结果写进 cdResult.textContent，三种情况分别处理：
  //          大于 0：还有 N 天
  //          等于 0：就是今天
  //          小于 0：已经过去 N 天
});
