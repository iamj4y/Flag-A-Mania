
document.addEventListener("DOMContentLoaded", function () {
    //timer
    let secondsLeft = 20;
    const totalTime = secondsLeft; // Store total time for reference
    const timerBar = document.getElementById("timerBar");
    const timeLeft = document.getElementById("timeLeft");

    if (timerBar) {
        // Ensure timer bar starts at full width
        timerBar.style.width = "100%";
    }

    // Check if elements exist
    if (!timerBar || !timeLeft) {
        console.error("Timer elements not found!");
        return; // Exit the function early if elements are missing
    }

    function updateTimer() {
        if (secondsLeft > 0) {
            secondsLeft--;
            timerBar.style.width = `${(secondsLeft / totalTime) * 100}%`;
            timeLeft.textContent = "0:" + secondsLeft.toString().padStart(2, "0");
        } else {
            clearInterval(interval); // Stop the timer when it reaches 0
             // Reset timer after 1 second
        }
    }

    function resetTimer() {
        secondsLeft = totalTime;
        timerBar.style.width = "100%";
        timeLeft.textContent = "0:" + secondsLeft.toString().padStart(2, "0");
        interval = setInterval(updateTimer, 1000); // Restart the timer
    }

    // Start the timer interval
    let interval = setInterval(updateTimer, 1000);
});
