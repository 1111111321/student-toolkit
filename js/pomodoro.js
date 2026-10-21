/* ===================================================
   Pomodoro timer
   25 minutes of focus, then a 5-minute break, repeated.
   =================================================== */

const FOCUS_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

const clock = document.querySelector('#clock');
const phase = document.querySelector('#phase');
const startBtn = document.querySelector('#startBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resetBtn = document.querySelector('#resetBtn');

let remaining = FOCUS_SECONDS;   // seconds left
let timerId = null;              // interval id; null means "not running"
let isFocus = true;              // are we in the focus phase?

/* Show `remaining` as 25:00 */
function render() {
  const m = Math.floor(remaining / 60);
  const s = remaining % 60;

  /* padStart(2, '0') turns 5 into "05", so the clock never jumps
     between "25:5" and "25:05". */
  clock.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/* Runs once every second */
function tick() {
  remaining -= 1;

  if (remaining <= 0) {
    /* This block is over: flip the phase and load the next duration. */
    isFocus = !isFocus;
    remaining = isFocus ? FOCUS_SECONDS : BREAK_SECONDS;
    phase.textContent = isFocus ? 'Focus' : 'Break';
  }

  render();
}

startBtn.addEventListener('click', () => {
  /* Without this guard, clicking Start twice would create a second
     interval and the clock would count down at double speed. */
  if (timerId !== null) return;

  timerId = setInterval(tick, 1000);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timerId);
  timerId = null;

  isFocus = true;
  remaining = FOCUS_SECONDS;
  phase.textContent = 'Focus';

  render();
});

render();  // show 25:00 as soon as the page loads
