/* ===================================================
   Exam countdown
   Remember: subtracting two dates gives milliseconds, so convert to days.
   =================================================== */

const cdForm = document.querySelector('#cdForm');
const cdDate = document.querySelector('#cdDate');
const cdResult = document.querySelector('#cdResult');

cdForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (cdDate.value === '') {
    cdResult.textContent = 'Pick a date to begin.';
    return;
  }

  /* Split "2026-12-20" by hand and build a date at LOCAL midnight.
     new Date("2026-12-20") would be read as UTC, which shifts the
     result by your time zone offset. */
  const [year, month, day] = cdDate.value.split('-').map(Number);
  const target = new Date(year, month - 1, day);   // months are 0-based

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const days = Math.round((target - today) / MS_PER_DAY);

  if (days > 0) {
    cdResult.textContent = `${days} day${days === 1 ? '' : 's'} left`;
  } else if (days === 0) {
    cdResult.textContent = 'It is today. Good luck.';
  } else {
    const ago = Math.abs(days);
    cdResult.textContent = `${ago} day${ago === 1 ? '' : 's'} ago`;
  }
});
