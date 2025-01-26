function main(){
    const settingsBox = document.getElementById("triviaSettingsBox");

    const dim = document.getElementById("overlay");

    const settingsButton = document.getElementById("settingsButton");

    const settingsCancel = document.getElementById("cancelButton");

    settingsButton.addEventListener("click", settingsClick);

    settingsCancel.addEventListener("click", cancelClick);

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
    var timerDur = document.getElementById('timer');
    var roundAmt = document.getElementById('rounds');
    var volumeSli = document.getElementById('volumeSlider');
    var sliderTxt = document.getElementById("sliderTxt");
    var ttsSwitch = document.getElementById('tts');
    const confirmBtn = document.getElementById('confirmButton');

    function confirm(event) {
        event.preventDefault();
        
        var sec = timerDur.value;
        var rounds = roundAmt.value;
        var volume = volumeSli.value;
        var TTStf = ttsSwitch.value;
        
        console.log(sec);
        document.cookie = `timerSet=${sec}` + ";" + "path=/"
        document.cookie = `roundAmt=${rounds}` + ";" + "path=/";
        document.cookie = `volumeAmt=${volume}` + ";" + "path=/";
        document.cookie = `TTStf=${TTStf}` + ";" + "path=/";

        settingsBox.style.animation = "zoomOut 0.3s ease-in forwards";
        setTimeout(Reset, 300)

        function Reset() {
        settingsBox.style.display = "none";
        dim.style.display = "none";
        }
    }

     function ttsOnOff() {
        if (ttsSwitch.value === "on") {
            ttsSwitch.value = "off";
            ttsSwitch.innerHTML = "OFF"
        } else {
            ttsSwitch.value = "on";
            ttsSwitch.innerHTML = "ON"
        }
        
    }
    
    console.log(document.cookie)
    sliderTxt.innerHTML = volumeSli.value;
    function sliderChange() {
        sliderTxt.innerHTML = this.value;
    }    
    volumeSli.addEventListener("input", sliderChange, true);
    ttsSwitch.addEventListener("click", ttsOnOff, false);
    confirmBtn.addEventListener("click", confirm);
}

window.addEventListener("click", main, false);
