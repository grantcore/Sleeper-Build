// Phase data for exercises
const phases = {
    1: {
        "Day 1 Push": [
            { name: "Pec Deck Flys", sets: 3, rest: "90s" },
            { name: "Neutral Grip Dumbbell Bench Press", sets: 3, rest: "90s" },
            { name: "Smith Machine Seated Shoulder Press", sets: 3, rest: "90s" },
            { name: "Cable Lateral Raise", sets: 3, rest: "90s" },
            { name: "DB Skull Crusher", sets: 3, rest: "90s" },
            { name: "Cable Single Arm Tricep Extension Low", sets: 3, rest: "90s" }
        ],
        "Day 2 Pull": [
            { name: "Close Grip Lat Pulldown", sets: 3, rest: "90s" },
            { name: "Lat Machine Single Arm Close Grip Row", sets: 3, rest: "90s" },
            { name: "Machine Seated Single Arm Neutral Grip Row", sets: 3, rest: "90s" },
            { name: "Rear Delt Cable Fly", sets: 3, rest: "90s" },
            { name: "Dumbbell Single Arm Preacher Curl", sets: 3, rest: "90s" },
            { name: "Cable Curl Single Arm", sets: 3, rest: "90s" }
        ],
        // Add Day 3, Day 4, and Day 5 for Phase 1 here...
    },
    2: {
        "Day 1 Push": [
            { name: "DB Incline Bench Press", sets: 3, rest: "90s" },
            { name: "Smith Machine Bench Press Flat", sets: 3, rest: "90s" },
            { name: "Machine Assisted Dip", sets: 3, rest: "90s" },
            { name: "DB Shoulder Press", sets: 3, rest: "90s" },
            { name: "DB Lateral Raise", sets: 3, rest: "90s" },
            { name: "Barbell Close Grip Bench Press", sets: 3, rest: "90s" }
        ],
        "Day 2 Pull": [
            { name: "Cable Seated Wide Grip Row", sets: 3, rest: "90s" },
            { name: "DB Single Arm Row", sets: 3, rest: "90s" },
            { name: "Lat Machine Wide Bar Close Grip Pulldown", sets: 3, rest: "90s" },
            { name: "Straight-Arm Pulldown", sets: 3, rest: "90s" },
            { name: "Seated Row Single Arm", sets: 3, rest: "90s" },
            { name: "DB Hammer Curl", sets: 3, rest: "90s" }
        ],
        // Add Day 3, Day 4, and Day 5 for Phase 2 here...
    }
};

// Function to change workout phase
function changePhase(phase) {
    const workoutContainer = document.getElementById("workout-container");
    workoutContainer.innerHTML = ""; // Clear current workout

    const phaseData = phases[phase];
    for (let day in phaseData) {
        const dayContainer = document.createElement("div");
        dayContainer.classList.add("day-container");
        dayContainer.innerHTML = `<h2>${day}</h2>`;

        phaseData[day].forEach(exercise => {
            const exerciseElement = document.createElement("div");
            exerciseElement.classList.add("exercise");
            exerciseElement.innerHTML = `
                <label for="${exercise.name}">${exercise.name}</label>
                <input type="number" placeholder="Reps" id="${exercise.name}-reps">
                <input type="number" placeholder="Weight (kg)" id="${exercise.name}-weight">
                <label>Rest Time: ${exercise.rest}</label>
            `;
            dayContainer.appendChild(exerciseElement);
        });

        workoutContainer.appendChild(dayContainer);
    }
}

// Initialize Phase 1 by default
window.onload = function() {
    changePhase(1);
};
