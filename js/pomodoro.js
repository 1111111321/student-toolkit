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
  // TODO 1: work out minutes and seconds
  //   const m = Math.floor(remaining / 60);
  //   const s = remaining % 60;
  // then build the string, padding the seconds: String(s).padStart(2, '0')
  // and write it into clock.textContent
}

/* Runs once every second */
function tick() {
  remaining -= 1;
  render();

  if (remaining <= 0) {
    // TODO 2: the block is over — switch phase
    //   if isFocus is true  -> isFocus = false; remaining = BREAK_SECONDS
    //   otherwise           -> isFocus = true;  remaining = FOCUS_SECONDS
    //   update phase.textContent ('Focus' / 'Break'), then render() again
  }
}

startBtn.addEventListener('click', () => {
  // TODO 3: only start if timerId is null (otherwise, clicking twice runs at double speed)
  //         timerId = setInterval(tick, 1000)
});

pauseBtn.addEventListener('click', () => {
  // TODO 4: clearInterval(timerId), then set timerId back to null
});

resetBtn.addEventListener('click', () => {
  // TODO 5: stop the timer, go back to the focus phase,
  //         set remaining = FOCUS_SECONDS and render()
});

render();  // show 25:00 as soon as the page loads
