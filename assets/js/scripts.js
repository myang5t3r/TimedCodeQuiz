// Variable declarations 
// get elements in html
var startCard = document.querySelector(".start_card")
var qCard = document.querySelector(".questions");
var ansCard = document.querySelector(".answers");
var cardSwitcher = document.querySelector(".start_btn");
var ansBtn1 = document.querySelector("#btn1");
var ansBtn2 = document.querySelector("#btn2");
var ansBtn3 = document.querySelector("#btn3");
var ansBtn4 = document.querySelector("#btn4");
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
    {question: ["What operator can you use to find the data type of a variable?"],
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
    ansBtn1.textContent = `1. ${myArry[qIndex].answer1[0]}`;
    ansBtn2.textContent = `2. ${myArry[qIndex].answer2[0]}`;
    ansBtn3.textContent = `3. ${myArry[qIndex].answer3[0]}`;
    ansBtn4.textContent = `4. ${myArry[qIndex].answer4[0]}`;
}

// Function to show if answer was correct/incorrect
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
ansBtn1.addEventListener("click", function(){
    if (myArry[0].answer1[1]===false){
        qIndex++
        popResults(false)
        loadQnA(qIndex)
    }else{
        finalScore++;
        qIndex++
        popResults(true)
        loadQnA(qIndex)
    }  
})
ansBtn2.addEventListener("click", function(){
    if (myArry[0].answer2[1]===false){
        qIndex++
        popResults(false)
        loadQnA(qIndex)
    }else{
        finalScore++;
        qIndex++
        popResults(true)
        loadQnA(qIndex)
    }  
})
ansBtn3.addEventListener("click", function(){
    if (myArry[0].answer3[1]===false){
        qIndex++
        popResults(false)
        loadQnA(qIndex)
    }else{
        finalScore++;
        qIndex++
        popResults(true)
        loadQnA(qIndex)
    }  
})
ansBtn4.addEventListener("click", function(){
    if (myArry[0].answer4[1]===false){
        qIndex++
        popResults(false)
        loadQnA(qIndex)
    }else{
        finalScore++;
        qIndex++
        popResults(true)
        loadQnA(qIndex)
    }  
})