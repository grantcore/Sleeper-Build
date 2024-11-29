let timerSeconds = 0;
let timerInterval;
let currentPhase = "phase1";

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function changePhase() {
    const phaseSelector = document.getElementById("phase");
    currentPhase = phaseSelector.value;
    document.getElementById("phase-title").textContent = currentPhase === "phase1" ? "Phase 1" : "Phase 2";
    document.getElementById("day-title").textContent = "Select a day";
}

function showWorkout(day) {
    const dayNames = {
        day1: "Day 1 - Push",
        day2: "Day 2 - Pull",
        day3: "Day 3 - Legs",
        day4: "Day 4 - Arms",
    };
    document.getElementById("day-title").textContent = dayNames[day];
    document.getElementById("menu").style.display = "none"; // Hide menu after selection
    resetTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timerSeconds++;
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        document.getElementById("timer").textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    timerSeconds = 0;
    document.getElementById("timer").textContent = "00:00";
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function finishWorkout() {
    stopTimer();
    alert("Workout finished!");
}

function cancelWorkout() {
    resetTimer();
    alert("Workout canceled.");
}