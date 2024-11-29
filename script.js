let setCount = 2; // Start with 2 sets for each exercise
let timerInterval;
let timerSeconds = 0;
let isWorkoutActive = false;

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
    const workoutSection = document.getElementById("workout");
    workoutSection.innerHTML = ""; // Clear previous workout

    // Show workout details based on the selected day
    if (day === "day1") {
        workoutSection.innerHTML = `
            <h2>Pec Deck Flys</h2>
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
    } else if (day === "day2") {
        workoutSection.innerHTML = `
            <h2>Lat Pulldown</h2>
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
    } else if (day === "day3") {
        workoutSection.innerHTML = `
            <h2>Squats</h2>
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
            <button