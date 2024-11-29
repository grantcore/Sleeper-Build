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

// Handle adding a new set for each exercise
document.getElementById("addSetBtn").addEventListener("click", function() {
    setCount++;
    const newSetDiv = document.createElement("div");
    newSetDiv.classList.add("set");
    newSetDiv.innerHTML = `
        <label for="set${setCount}_reps">Set ${setCount} - Reps:</label>
        <input type="number" id="set${setCount}_reps" placeholder="Reps">
        <label for="set${setCount}_weight">Set ${setCount} - Weight:</label>
        <input type="number" id="set${setCount}_weight" placeholder="Weight (kg)">
    `;
    document.getElementById("workout").appendChild(newSetDiv);
});

// Cancel the workout
document.getElementById("cancelBtn").addEventListener("click", function() {
    if (confirm("Are you sure you want to cancel the workout? Data will be saved for next time.")) {
        // Logic to save data
        alert("Workout cancelled. Data saved.");
        stopTimer();
        window.location.reload(); // Simulating a cancel by refreshing the page
    }
});

// Finish the workout
document.getElementById("finishBtn").addEventListener("click", function() {
    stopTimer();
    alert("Workout completed!");
    document.getElementById("day1").classList.add("completed");
    logWorkoutStats();
});

// Log workout stats
function logWorkoutStats() {
    const workoutData = {
        pecDeck: {
            set1: {
                reps: document.getElementById("set1_reps").value,
                weight: document.getElementById("set1_weight").value
            },
            set2: {
                reps: document.getElementById("set2_reps").value,
                weight: document.getElementById("set2_weight").value
            }
            // Add logic for more sets
        },
        timeSpent: document.getElementById("timer").textContent,
        date: new Date().toLocaleString()
    };
    console.log("Logged Workout Data:", workoutData);
}

// Save the workout (simplified)
document.getElementById("saveBtn").addEventListener("click", function() {
    const workoutData = {
        pecDeck: {
            set1: {
                reps: document.getElementById("set1_reps").value,
                weight: document.getElementById("set1_weight").value
            },
            set2: {
                reps: document.getElementById("set2_reps").value,
                weight: document.getElementById("set2_weight").value
            }
            // Add logic for more sets
        }
    };
    console.log("Saved Workout Data:", workoutData);
    alert("Workout saved!");
});

// Show the workout for the selected day
function showWorkout(day) {
    const workoutSection = document.getElementById("workout");
    workoutSection.innerHTML = ""; // Clear previous workout
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
                <label for="