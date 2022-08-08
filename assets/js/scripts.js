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

// Lets code the question and answers into an object
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

// get elements for html
var startCard = document.querySelector(".start_card")
var qCard = document.querySelector(".questions");
var ansCard = document.querySelector(".answers");
var cardSwitcher = document.querySelector(".start_btn");
var ansBtn1 = document.querySelector("#btn1");
var ansBtn2 = document.querySelector("#btn2");
var ansBtn3 = document.querySelector("#btn3");
var ansBtn4 = document.querySelector("#btn4");
var ansBtn = document.querySelectorAll(".ansBtn")
var finalScore = 0;
var footTxt1 = document.querySelector(".foot_txt1");
var footTxt2 = document.querySelector(".foot_txt2");

// Event listener for starting quiz
cardSwitcher.addEventListener("click", function(){
    startCard.setAttribute("style", "display:none;")
    qCard.setAttribute("style", "display:flex;")
    ansCard.setAttribute("style", "display:flex;")
    
}) 

// insert questions and answers to buttons from object
qCard.textContent = myArry[0].question;
ansBtn1.textContent = `1. ${myArry[0].answer1[0]}`;
ansBtn2.textContent = `2. ${myArry[0].answer2[0]}`;
ansBtn3.textContent = `3. ${myArry[0].answer3[0]}`;
ansBtn4.textContent = `4. ${myArry[0].answer4[0]}`;

// Event listener for user selecting a answer
ansBtn1.addEventListener("click", function(){
    if (myArry[0].answer1[1]===false){
        footTxt1.setAttribute("style", "display:flex;");
        console.log(false);
    }else{
        console.log(true);
        footTxt2.setAttribute("style", "display:flex;");

        finalScore++;
    }  
})
ansBtn2.addEventListener("click", function(){
    if (myArry[0].answer2[1]===false){
        console.log(false);
        footTxt1.setAttribute("style", "display:flex;");
    }else{
        console.log(true);
        footTxt2.setAttribute("style", "display:flex;");
        finalScore++;
    }  
})
ansBtn3.addEventListener("click", function(){
    if (myArry[0].answer3[1]===false){
        console.log(false);
        footTxt1.setAttribute("style", "display:flex;");
    }else{
        console.log(true);
        footTxt2.setAttribute("style", "display:flex;");
        finalScore++;
    }  
})
ansBtn4.addEventListener("click", function(){
    if (myArry[0].answer4[1]===false){
        console.log(false);
        footTxt1.setAttribute("style", "display:flex;");
    }else{
        console.log(true);
        footTxt2.setAttribute("style", "display:flex;");
        finalScore++;
    }  
})

// console.log(ansBtn)
// ansBtn.forEach(Element => {
//     Element.addEventListener("click", function(){
//         console.log("Button Pressed")
//         console.log(Element)
//     })
// })
