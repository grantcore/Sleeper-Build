document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".progress");
  const progressPercentage = document.querySelector(".progress-percentage");

  // Simulated progress - replace this with real data from Firebase later.
  const progress = 30; // Example: 30%

  progressBar.style.width = `${progress}%`;
  progressPercentage.textContent = `${progress}%`;
});
