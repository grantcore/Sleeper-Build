// Main Workout Timer
let totalTimer = document.getElementById("total-timer");
let totalSeconds = 0;
setInterval(() => {
  totalSeconds++;
  let minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  let seconds = (totalSeconds % 60).toString().padStart(2, "0");
  totalTimer.textContent = `${minutes}:${seconds}`;
}, 1000);

// Rest Timer Functionality
function startRestTimer(button) {
  const restTime = button.getAttribute("data-time");
  let timeLeft = parseInt(restTime);
  if (button.textContent.includes("Start")) {
    button.textContent = `${timeLeft}s Rest (Stop)`;
    const timer = setInterval(() => {
      timeLeft--;
      button.textContent = `${timeLeft}s Rest (Stop)`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        button.textContent = `${restTime}s Rest (Start)`;
      }
    }, 1000);
    button.onclick = () => {
      clearInterval(timer);
      button.textContent = `${restTime}s Rest (Start)`;
      button.onclick = () => startRestTimer(button);
    };
  }
}

// Finish Workout
function finishWorkout() {
  alert("Workout Finished!");
  // Logic to save workout data (to be implemented with Firebase)
}