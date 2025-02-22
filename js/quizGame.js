document.addEventListener("DOMContentLoaded", function () {
    //darkmode settings
    const darkModeToggle = document.getElementById("darkMode");
    const images = [
        { id: "drawingImage", light : "../img/drawingvecto.png", dark : "../img/StudentStudyingDark.png"},
        { id: "beingCreativeImage", light : "../img/Being Creative.png", dark : "../img/beingCreativeDark.png"},
        {id : "aboutUsImage", light : "../img/About Our Team.png", dark : "../img/AboutOurTeamDark.png"},
    ]

    function updateImages() {
        images.forEach(imageObj => {
            let imgElement = document.getElementById(imageObj.id);
            if (imgElement) {
                imgElement.src = document.body.classList.contains("dark-mode") ? imageObj.dark : imageObj.light;
            }
        })
    }

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.classList.replace("fa-moon-o", "fa-sun-o");
        updateImages();
    }

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.classList.replace("fa-moon-o", "fa-sun-o");
        
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.classList.replace("fa-sun-o", "fa-moon-o");
        }
        updateImages()
    });
});

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
            setTimeout(resetTimer, 1000); // Reset timer after 1 second
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
