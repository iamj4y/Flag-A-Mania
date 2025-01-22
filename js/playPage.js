var settingsBox = document.getElementById("triviaSettingsBox");

var settingsButton = document.getElementById("settingsButton");

settingsButton.addEventListener("click", settingsClick);

function settingsClick() {
    settingsButton.innerHTML = "Clicked!";
}