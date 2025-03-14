document.addEventListener("DOMContentLoaded", function () {
    var questionsLeft = 0;
    var volumeSetting = 0;
    var ttsSetting = '';
    
    const cookies = document.cookie.split(';');
    for (var cookie of cookies) {
        var refinedCookie = cookie.trim()
        if (refinedCookie.startsWith("lQuestionAmt=")) {
            questionsLeft = parseInt(refinedCookie.split("=").pop())
        }  if (refinedCookie.startsWith("lVolumeAmt=")) {
            volumeSetting = parseInt(refinedCookie.split("=").pop())
        } if (refinedCookie.startsWith("lTTS=")) {
            ttsSetting = refinedCookie.split("=").pop()
    }}
    
    var correctAns = 0;
    var incorrectAns = 0;
    var score = 0;
    const questionAmt = questionsLeft;
    const scoreNum = document.getElementById("scoreNum");
    const progressBar = document.getElementById("progressBar");
    const optionsContainer = document.getElementById("optionsContainer")
    const question = document.getElementById("actualQtn");
    const option1 = document.getElementById("1");
    const option2 = document.getElementById("2");
    const option3 = document.getElementById("3");
    const option4 = document.getElementById("4");

    var correctAnswer= [];

    function loadQtn() {
        fetch('../getLearn.php')
            .then(choicesJSON => choicesJSON.json())
            .then(data => {
                console.log(data);
                var qtnIndex = Math.floor(Math.random() * 4);
                correctAnswer = data[qtnIndex];
                var thingInQuestion = correctAnswer["QUESTION"];
                question.textContent = thingInQuestion;
                option1.querySelector("p").textContent = data[0].CORRECT_ANSWER;
                option2.querySelector("p").textContent = data[1].CORRECT_ANSWER;
                option3.querySelector("p").textContent = data[2].CORRECT_ANSWER;
                option4.querySelector("p").textContent = data[3].CORRECT_ANSWER;
            })
            .catch(error => console.error("Error fetching question:", error));
    }       

    if (progressBar) {
        // Ensure progress bar starts at full width
        progressBar.style.width = "100%";
    }

    function checkAnswer(selectedBtn, btnText) {
        if (questionsLeft > 1) {
           if (btnText == correctAnswer.CORRECT_ANSWER) {
            correctAns ++;
            score = score + 100;
            selectedBtn.style.backgroundColor = "#6ca678";      
            setTimeout(() => {
                selectedBtn.style.backgroundColor = "";
              }, 400);     
            } else {
                incorrectAns ++;
                selectedBtn.style.backgroundColor = "#a66c70";
                setTimeout(() => {
                    selectedBtn.style.backgroundColor = "";
                  }, 400); 
            } 
            questionsLeft--;
            progressBar.style.width= `${(questionsLeft / questionAmt) * 100}%`;
            scoreNum.textContent = score;
                loadQtn();
            
        } else {
            if (btnText == correctAnswer.CORRECT_ANSWER) {
                correctAns ++;
                score += 100;
                selectedBtn.style.backgroundColor = "#6ca678";      
                setTimeout(() => {
                    selectedBtn.style.backgroundColor = "";
                }, 400);   
            } else {
                incorrectAns ++;
                selectedBtn.style.backgroundColor = "#a66c70";
                setTimeout(() => {
                    selectedBtn.style.backgroundColor = "";
                }, 400); 
            }
            document.cookie = `finalScore=${score}` + ";" + "path=/";
            document.cookie = "totalSeconds=---;" + "path=/";
            document.cookie = `correctAnswers=${correctAns}` + ";" + "path=/";
            document.cookie = `incorrectAnswers=${incorrectAns}` + ";" + "path=/";
            setTimeout(() => {
                window.location.href = "scorePage.html";
            }, 500)
        }
    }

    loadQtn();
    optionsContainer.querySelectorAll("button").forEach(button => button.addEventListener("click", function() {checkAnswer(this, this.querySelector("p").textContent)}, false));
});
