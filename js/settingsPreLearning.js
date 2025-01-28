function settingsThing(){
    const confirmBtn = document.getElementById("confirmButton");
    const cancelBtn = document.getElementById("cancelButton");

    function clickConfirm() {
        window.location.href = '../html/learningMode.html';
    }

    function clickCancel() {
        window.location.href = '../html/play.html';
    }

    confirmBtn.addEventListener("click", clickConfirm);
    cancelBtn.addEventListener("click", clickCancel);
}

window.addEventListener("load", settingsThing);