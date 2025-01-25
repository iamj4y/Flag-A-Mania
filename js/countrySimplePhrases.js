function abbr2Title(abbr) {
    var img = document.getElementById('flagImg');
    var countryNameDiv = document.getElementById('countryName')

    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", `../img/flag/${abbr}.svg`)
    imgTag.setAttribute("alt", "flag");
    imgTag.setAttribute("width", "200px")
    img.append(imgTag);

}

function countryPhrasePage() {
    var contentDiv= document.getElementById("phraseContents");
    console.log(document.cookie);
    const cookies = document.cookie.split(';');
    var country = '';

    const divNav = document.getElementById('phrasesToggle');
    const navLinks = divNav.getElementsByTagName('a');

    while (contentDiv.hasChildNodes()){
        contentDiv.removeChild(contentDiv.lastChild);
        }

    for (var cookie of cookies) {
        var refinedCookie = cookie.trim()
        if (refinedCookie.startsWith("countrySPSelected=")) {
            country = refinedCookie.split("=").pop()
        }
    }

    abbr2Title(country);


}

window.addEventListener("load", countryPhrasePage, false);
