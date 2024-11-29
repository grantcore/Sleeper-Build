let setCount = 2; // Start with 2 sets for each exercise
let timerInterval;
let timerSeconds = 0;
let isWorkoutActive = false;
let currentDay = ""; // Store the current day (used for changing workout)

const phases = {
    day1: "Phase 1: Strength Training",
    day2: "Phase 2: Hypertrophy Focus",
    day3: "Phase 3: Endurance",
    day4: "Phase 4: Power Training"
};

// Start the timer
function startTimer() {
    timerInterval = setInterval(function() {
        timerSeconds++;
        let minutes = Math.floor(timerSeconds / 60);
        let seconds = timerSeconds % 60;
        document.getElementById("timer").textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
    }, 1000);
}

// Stop the timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Format time as MM:SS
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// Show the workout for the selected day
function showWorkout(day) {
    currentDay = day;
    const workoutSection = document.getElementById("workout");
    workoutSection.innerHTML = ""; // Clear previous workout

    // Show phase and workout details based on the selected day
    workoutSection.innerHTML = `
        <h2>${phases[day]}</h2>
        <h3>${day === "day1" ? "Push Day (Chest & Shoulders)" : 
            day === "day2" ? "Pull Day (Back & Biceps)" : 
            day === "day3" ? "Leg Day" : "Arm Day"}</h3>
        <div class="set">
            <label for="set1_reps">Set 1 - Reps:</label>
            <input type="number" id="set1_reps" placeholder="Reps">
            <label for="set1_weight">Set 1 - Weight:</label>
            <input type="number" id="set1_weight" placeholder="Weight (kg)">
        </div>
        <div class="set">
            <label for="set2_reps">Set 2 - Reps:</label>
            <input type="number" id="set2_reps" placeholder="Reps">
            <label for="set2_weight">Set 2 - Weight:</label>
            <input type="number" id="set2_weight" placeholder="Weight (kg)">
        </div>
        <button id="addSetBtn">Add Set</button>
    `;

    // Highlight selected day and remove highlight from others
    document.querySelectorAll(".day-square").forEach(daySquare => {
        daySquare.classList.remove("completed");
    });
    document.getElementById(day).classList.add("completed");
}

// Finish workout
document.getElementById("finishBtn").addEventListener("click", function() {
    stopTimer();
    alert("Workout completed!");
    document.getElementById(currentDay).classList.add("completed");
});

// Cancel workout
document.getElementById("cancelBtn").addEventListener("click", function() {
    stopTimer();
    alert("Workout canceled.");
});

// Ensure each day status can be clicked and show workout
document.querySelectorAll(".day-square").forEach(daySquare => {
    daySquare.addEventListener("click", function() {
        showWorkout(daySquare.id);
    });
});

// Initial setup: Load Day 1 on page load
window.onload = function() {
    showWorkout('day1');
};