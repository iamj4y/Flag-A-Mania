function startScript() {

    

    const buttons = document.querySelectorAll('button');


    buttons.forEach(button => {
        button.addEventListener('click', function() {
          const value = this.value; 
          localStorage.setItem('countrySPSelected', value);
          document.cookie = "country=" + value + ";" + "path=../html"

          window.location.href = '../html/countrySimplePhrases.html';
        });
    });
    
}

window.addEventListener("load", startScript, false);
