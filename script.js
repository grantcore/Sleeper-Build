// Global Workout Timer
let totalTimer = document.getElementById("total-timer");
let totalSeconds = 0;
setInterval(() => {
  totalSeconds++;
  let minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  let seconds = (totalSeconds % 60).toString().padStart(2, "0");
  totalTimer.textContent = `${minutes}:${seconds}`;
}, 1000);

// Rest Timer Functionality
function startRestTimer(button, duration) {
  let timeLeft = duration;
  button.disabled = true;
  const interval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(interval);
      button.textContent = `Rest: Done`;
      button.disabled = false;
    } else {
      timeLeft--;
      button.textContent = `Rest: ${timeLeft}s`;
    }
  }, 1000);
}