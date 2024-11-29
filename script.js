// Timer functionality
let timer;
let timeRemaining = 0;
let timerRunning = false;

const startTimerButton = document.getElementById('start-timer');
const timerDisplay = document.getElementById('timer-display');

// Start or stop the timer
startTimerButton.addEventListener('click', () => {
    if (timerRunning) {
        clearInterval(timer);
        timerRunning = false;
        startTimerButton.textContent = 'Start Timer';
    } else {
        timeRemaining = 30; // Set to 30 seconds for example, change as needed
        startTimer();
        timerRunning = true;
        startTimerButton.textContent = 'Stop Timer';
    }
});

// Function to start the timer
function startTimer() {
    timer = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert('Time is up!');
            timerRunning = false;
            startTimerButton.textContent = 'Start Timer';
        } else {
            timeRemaining--;
            updateTimerDisplay(timeRemaining);
        }
    }, 1000);
}

// Update the timer display
function updateTimerDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Format time for display (e.g., 5 seconds becomes 05)
function formatTime(num) {
    return num < 10 ? `0${num}` : num;
}

// Log workout data (sets, reps, weight)
const workoutForm = document.getElementById('workout-form');
const exerciseNameInput = document.getElementById('exercise-name');
const setsInput = document.getElementById('sets');
const repsInput = document.getElementById('reps');
const weightInput = document.getElementById('weight');

// Listen for form submission
workoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const exerciseName = exerciseNameInput.value;
    const sets = setsInput.value;
    const reps = repsInput.value;
    const weight = weightInput.value;

    // Save the workout data to local storage (for now)
    saveWorkoutData(exerciseName, sets, reps, weight);

    // Clear the form after submission
    workoutForm.reset();
    alert('Workout logged successfully!');
});

// Save the workout data
function saveWorkoutData(exerciseName, sets, reps, weight) {
    let workoutData = JSON.parse(localStorage.getItem('workouts')) || [];

    const newWorkout = {
        exerciseName,
        sets,
        reps,
        weight,
        date: new Date().toLocaleString()
    };

    workoutData.push(newWorkout);
    localStorage.setItem('workouts', JSON.stringify(workoutData));
}

// Retrieve and display the previous workout data
function displayPreviousWorkouts() {
    const workoutData = JSON.parse(localStorage.getItem('workouts')) || [];
    const workoutList = document.createElement('ul');

    workoutData.forEach((workout) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${workout.exerciseName}: ${workout.sets} sets x ${workout.reps} reps at ${workout.weight} kg (${workout.date})`;
        workoutList.appendChild(listItem);
    });

    document.body.appendChild(workoutList);
}

// Display previous workouts when the page loads
window.onload = displayPreviousWorkouts;