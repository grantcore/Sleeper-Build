// Navigation Helper
function navigateTo(page) {
  window.location.href = page;
}

// Timer Logic
let timerInterval;
function startTimer() {
  let startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / 60000) % 60;
    const hours = Math.floor(elapsedTime / 3600000);
    document.getElementById('timer').textContent = `${hours
      .toString()
      .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

// End Workout
function endWorkout() {
  stopTimer();
  alert('Workout Completed!');
}