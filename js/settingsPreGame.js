function settingsThing(){
    const confirmBtn = document.getElementById("confirmButton");
    const cancelBtn = document.getElementById("cancelButton");

    function clickConfirm(event) {
        event.preventDefault()
        window.location.href = '../html/trivia.html';
    }

    function clickCancel(event) {
        event.preventDefault()
        window.location.href = '../html/play.html';
    }

    confirmBtn.addEventListener("click", clickConfirm);
    cancelBtn.addEventListener("click", clickCancel);
}

window.addEventListener("load", settingsThing);
