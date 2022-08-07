// Timer code - make a function so we can show timer after user selects an answer
//  variable to store time
var timeLeft = 60;
//  Use query selector to get element by class
var timeEl = document.querySelector(".timer")
// Use callback function 
function setTime() {
    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = `Time:${timeLeft}`;
        if(timeLeft === 0) {
            clearInterval(timerInterval)
            alert("Time is over")
        }
    }, 1000)
}

// setTime()

