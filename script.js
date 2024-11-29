// Main Workout Timer
let totalTimer = document.getElementById("total-timer");
let totalSeconds = 0;
setInterval(() => {
  totalSeconds++;
  let minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  let seconds = (totalSeconds % 60).toString().padStart(2, "0");
  totalTimer.textContent = `${minutes}:${seconds}`;
}, 1000);

// Finish Workout Function
function finishWorkout() {
  alert("Workout Finished!");
  // Logic to save workout data goes here
}