function startScript() {

    

    const buttons = document.querySelectorAll('button');


    buttons.forEach(button => {
        button.addEventListener('click', function() {
          const value = this.value; 
          document.cookie = "countrySPSelected=" + value + ";" + "path=/"

          window.location.href = '../html/countrySimplePhrases.html';
        });
    });
    
}

window.addEventListener("load", startScript, false);
