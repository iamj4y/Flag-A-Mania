var settingsBox = document.getElementById("triviaSettingsBox");

triviaSettingsBox.style.display = "none";

var settingsButton = document.getElementById("settingsButton");

settingsButton.addEventListener("click", settingsClick);

function settingsClick() {
    triviaSettingsBox.style.display = "block";
}