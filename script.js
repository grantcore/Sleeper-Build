// Example Progress Data
let completedDays = 7; // Number of completed days (placeholder value)
let totalDays = 28; // Total days in all phases (placeholder value)

// Update Progress Bar
function updateProgressBar() {
    const progressPercentage = Math.round((completedDays / totalDays) * 100);
    document.getElementById("progress").style.width = `${progressPercentage}%`;
    document.getElementById("progress-percentage").textContent = `Progress: ${progressPercentage}%`;
}

// Call this function on page load
updateProgressBar();
