const settingsBox = document.getElementById("triviaSettingsBox"); /* This is a variable for the settings box div */

const dim = document.getElementById("overlay");

const settingsButton = document.getElementById("settingsButton");

const settingsCancel = document.getElementById("cancelButton");

settingsButton.addEventListener("click", settingsClick); /* This triggers the settingsClick function when you click on the settings button */

settingsCancel.addEventListener("click", cancelClick); /* This triggers the cancelClick function when you click on the cancel button */

function settingsClick() {
    settingsBox.style.display = "block";
    dim.style.display = "block";
    settingsBox.style.animation = "zoomIn 0.3s ease-out forwards";
    
   /* Code for an off-screen animation; might not be an accessible concept
   
   let pos = -250;
    clearInterval(animateBox);

    function frame () {
    if (pos === 50) {
        clearInterval(animateBox);
    } else {
        pos++;
        settingsBox.style.top = pos + 'px';
    } 
} 

    animateBox = setInterval(frame, 1); */

}

function cancelClick() {
    settingsBox.style.animation = "zoomOut 0.3s ease-in forwards";

    setTimeout(Reset, 300)

    function Reset() {
    settingsBox.style.display = "none";
    dim.style.display = "none";
    }
}