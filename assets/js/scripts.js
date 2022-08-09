// Variable declarations 
// get elements in html
var startCard = document.querySelector(".start_card")
var qCard = document.querySelector(".questions");
var ansCard = document.querySelector(".answers");
var cardSwitcher = document.querySelector(".start_btn");
var ansBtn = document.getElementsByClassName("ansBtn");
var footTxt1 = document.querySelector(".foot_txt1");
var footTxt2 = document.querySelector(".foot_txt2");
var timeEl = document.querySelector(".timer")

// global variables
var finalScore = 0;
var timeLeft = 60;
var qIndex = 0;
var popupTime = 1;  

// Lets place the question and answers into an object
var myArry = [
    {question: "What operator can you use to find the data type of a variable?",
    guessItem:["object.property", "this.object","typeof","propertyKey"],
    answer:"typeof",
    guess:""
    },
    {question: "What does the === operator do in JS?",
    guessItem:["compares two variables are equal", "compares two variables and the data type and equal",
    "compares two numbers are equal","compares two string are equal"],
    answer:"compares two variables and the data type and equal",
    guess:""
    },
    {question: "In JS what method is used to get an element from an html document ",
    guessItem:["setInterval()", "appendChild()","getElementById()","setAttribute()"],
    answer:"getElementById()",
    guess:""
    },
    {question: "Who invented JavaScript?",
    guessItem:["Elon Musk", "Brendan Eich","Jeff Bezos","Guido van Rossum"],
    answer:"Brendan Eich",
    guess:""
    },
    {question: "When was JavaScript created?",
    guessItem:["1995", "1991","1970","1983"],
    answer:"1995",
    guess:""
    },
    {question: "What are Higher Order Functions?",
    guessItem:["Fuctions that operate on other functions", 
    "A function that takes another function as an argument",
    "a function that returns another function",
    "All the above"],
    answer:"All the above",
    guess:""
    },
    {question: "What is recursion?",
    guessItem:["A recurring error in your code", 
    "A function that calls itself directly repeatedly until you get your desire result",
    "a function that returns another function",
    "All the above"],
    answer:"A function that calls itself directly repeatedly until you get your desire result",
    guess:""
    }
];

// Timer function  - we will call this after a answers is selected  
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

// Let create a function that loads the questions and answers
// insert questions and answers to buttons from object
function loadQnA(qIndex) {
    qCard.textContent = myArry[qIndex].question;
    for (let i = 0 ; i < ansBtn.length; i++){
        ansBtn[i].textContent = myArry[qIndex].guessItem[i];
        }   
    }

// Function to show if answer was correct/incorrect - NEED T0 FIX
function popResults(x) {
    if (x === true){
        footTxt2.setAttribute("style", "display:flex;");
    } else {
        footTxt1.setAttribute("style", "display:flex;");
    };  
    var popupTime = setInterval(function(){
        popupTime--;
        if(popupTime === 0) {
            footTxt1.setAttribute("style", "display:none;");
            footTxt1.setAttribute("style", "display:none;");  
            clearInterval(popupTime)
        }
    }, 100)
}

// Event Handlers 
// Start Quiz Handler
cardSwitcher.addEventListener("click", function(){
    loadQnA(qIndex)
    startCard.setAttribute("style", "display:none;")
    qCard.setAttribute("style", "display:flex;")
    ansCard.setAttribute("style", "display:flex;")   
}) 

// Event handler selecting a answer
for (let i = 0 ; i < ansBtn.length; i++){
    ansBtn[i].addEventListener("click", function(event){
        var element = event.target
        var txt = element.textContent
        myArry[qIndex].guess = txt
        console.log( myArry[qIndex].guess)
        if (myArry[qIndex].guess === myArry[qIndex].answer) {
            qIndex++
            finalScore++;
            popResults(true)
            loadQnA(qIndex)
        }else{
            qIndex++
            popResults(false)
            loadQnA(qIndex)
        }
    }
)}
