/* ===================================================
   Exam countdown
   Remember: subtracting two dates gives milliseconds, so convert to days.
   =================================================== */

const cdForm = document.querySelector('#cdForm');
const cdDate = document.querySelector('#cdDate');
const cdResult = document.querySelector('#cdResult');

cdForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // TODO 1: turn cdDate.value (e.g. "2026-12-20") into a Date
  //         hint: new Date(cdDate.value)
  // TODO 2: get today's date and reset the time to midnight
  //         hint: const today = new Date(); today.setHours(0, 0, 0, 0);
  // TODO 3: subtract and convert to days: / (1000 * 60 * 60 * 24)
  //         use Math.round or Math.ceil to get a whole number
  // TODO 4: write the result into cdResult.textContent, handling three cases:
  //         more than 0 -> "N days left"
  //         equal to 0  -> "It is today"
  //         less than 0 -> "N days ago"
});
