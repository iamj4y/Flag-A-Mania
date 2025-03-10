function abbr2Title(abbr, div) {
    var img = document.getElementById('flagImg');
    var countryNameH = document.getElementById('countryName')
    var countryName = "";

    var imgTag = document.createElement("img");
    imgTag.setAttribute("src", `../img/flag/${abbr}.svg`)
    imgTag.setAttribute("alt", "flag");
    imgTag.setAttribute("width", "200px")
    img.append(imgTag);


    var countrySet = [
        {country : "us", name : "United States of America"},
        {country : "ca", name : "Canada"},
        {country : "mx", name : "Mexico"},
        {country : "br", name : "Brazil"},
        {country : "ar", name : "Argentina"},
        {country : "co", name : "Columbia"},
        {country : "pe", name : "Peru"},
        {country : "cl", name : "Chile"},
        {country : "cu", name : "Cuba"},
        {country : "ve", name : "Venezuela"},
        {country : "cr", name : "Costa Rica"},
        {country : "ec", name : "Ecuador"},
        {country : "gt", name : "Guatemala"},
        {country : "hn", name : "Honduras"},
        {country : "sv", name : "El Salvador"},
        {country : "ni", name : "Nicaragua"},
        {country : "pa", name : "Panama"},
        {country : "ht", name : "Haiti"},
        {country : "do", name : "Dominican Republic"},
        {country : "jm", name : "Jamaica"},
        {country : "bs", name : "The Bahamas"},
        {country : "bb", name : "Barbados"},
        {country : "tt", name : "Trinidad and Tobago"},
        {country : "gy", name : "Guyana"},
        {country : "sr", name : "Suriname"},
        {country : "gf", name : "French Guiana"},
    ]
    
    for (var i = 0; i < countrySet.length; i++) {
        for (var item in countrySet[i]) {
            console.log(countrySet[i].name);
            if (countrySet[i].country == abbr) {
                
                countryName = countrySet[i].name;
            }
        }
    }
    
    var countryNameTxtNode = document.createTextNode(countryName);
    countryNameH.appendChild(countryNameTxtNode);
}

function countryPhrasePage() {
    var contentDiv= document.getElementById("phraseContents");
    const cookies = document.cookie.split(';');
    var country = '';

    const divNav = document.getElementById('phrasesToggle');
    const navLinks = divNav.getElementsByTagName('a');
    var linkArray = Array.from(navLinks);
    console.log(linkArray);

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

    //take in data from database

    var category = "";

    linkArray.forEach(navLink => {
        navLink.addEventListener('click', function() {
            categoryId = this.id;
            console.log(categoryId)

            while (contentDiv.hasChildNodes()){
                contentDiv.removeChild(contentDiv.lastChild);
                }
            
            var phraseList = document.createElement("ul");
        });
    });
}

window.addEventListener("load", countryPhrasePage, false);
