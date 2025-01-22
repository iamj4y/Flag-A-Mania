const settingsBox = document.getElementById("triviaSettingsBox");

const dim = document.getElementById("overlay");

const settingsButton = document.getElementById("settingsButton");

settingsButton.addEventListener("click", settingsClick);

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