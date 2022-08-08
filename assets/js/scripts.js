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

// Lets code the question and answers 
var myArry = [
    {question: "What operator can you use to find the data type of a variable?",
    answer1:["object.property", false],
    answer2:["this.object", false],
    answer3:["typeof", true],
    answer4:["propertyKey", false]
    },
    {question: "What does the === operator do in JS?",
    answer1:["compares two variables are equal", false],
    answer2:["compares two variables and the data type and equal", true],
    answer3:["compares two numbers are equal", false],
    answer4:["compares two string are equal", false]
    },
    {question: "In JS what method is used to get an element from an html document ",
    answer1:["setInterval()", false],
    answer2:["appendChild()", false],
    answer3:["getElementById()", true],
    answer4:["setAttribute()", false]
    }
]

