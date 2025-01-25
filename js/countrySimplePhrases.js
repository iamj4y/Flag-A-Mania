function countryPhrasePage() {
    var contentDiv= document.getElementById("phraseContents");
    console.log(document.cookie);
    const cookies = document.cookie.split(';');
    var country = '';

    const divNav = document.getElementById('phrasesToggle');
    const navLinks = divNav.getElementsByTagName('a');

    while (contentDiv.hasChildNodes()){
        contentDiv.removeChild(badgeDiv.lastChild);
        }

    for (var cookie of cookies) {
        var refinedCookie = cookie.trim()
        if (refinedCookie.startsWith("countrySPSelected=")) {
            country = refinedCookie.split("=").pop()
        }
    }

    

}

window.addEventListener("load", countryPhrasePage, false);