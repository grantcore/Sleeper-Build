document.addEventListener("DOMContentLoaded", () => {
    const timerBtns = document.querySelectorAll(".timer-btn");
    timerBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (btn.textContent === "Start Timer") {
                btn.textContent = "Stop Timer";
                // Timer logic here
            } else {
                btn.textContent = "Start Timer";
                // Stop timer logic
            }
        });
    });

    document.getElementById("endWorkout").addEventListener("click", () => {
        alert("Workout Completed!");
        // Save data logic
    });
});
