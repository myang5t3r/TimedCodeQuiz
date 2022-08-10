// Variable declarations 
// get elements in html
var startCard = document.querySelector(".start_card");
var qCard = document.querySelector(".questions");
var ansCard = document.querySelector(".answers");
var cardSwitcher = document.querySelector(".start_btn");
var ansBtn = document.getElementsByClassName("ansBtn");
var footTxt1 = document.querySelector(".foot_txt1");
var footTxt2 = document.querySelector(".foot_txt2");
var timeEl = document.querySelector(".timer");
var endCard = document.querySelector(".end_card");
var endScore = document.querySelector(".end_score");
var saveScore = document.getElementById("saveScore");
var saveName = document.getElementById("inputTxt");
var restart = document.getElementById("restart");

// global variables
var finalScore = 0;
var timeLeft = 60;
var popupTime = 1;
var qIndex = 0;  

// Lets place the question and answers into an object
var myArray = [
    {question: "What operator can you use to find the data type of a variable?",
    guessItem:["object.property", "this.object","typeof","propertyKey"],
    answer:"typeof",
    guess:""
    },
    {question: "What does the === operator do in JS?",
    guessItem:["Compares two variables are equal", 
    "Compares two variables and the data type and equal",
    "Compares two numbers are equal","Compares two string are equal"],
    answer:"Compares two variables and the data type and equal",
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
    guessItem:["Functions that operate on other functions", 
    "A function that takes another function as an argument",
    "A function that returns another function",
    "All the above"],
    answer:"All the above",
    guess:""
    },
    {question: "What is recursion?",
    guessItem:["A recurring error in your code", 
    "A function that calls itself directly repeatedly until you get your desire result",
    "A function that returns another function",
    "All the above"],
    answer:"A function that calls itself directly repeatedly until you get your desire result",
    guess:""
    },
    {question: "What is hoisting in javascript?",
    guessItem:["does not include variable initializations", 
    "When variable and function declarations are moved to the top",
    "Can occur in both local and global scope",
    "All the above"],
    answer:"All the above",
    guess:""
    },
    {question: "What are object prototypes in javascript?",
    guessItem:["A blueprint of an object", 
    "Javascript inherited properties ",
    "Allows us to use properties and methods on an object even if properties and methods do not exist on the current object",
    "All the above"],
    answer:"All the above",
    guess:""
    },
    {question: "What are generator functions javascript?",
    guessItem:["A blueprint of an function", 
    "A special function that can be stopped midway and then continue from where they had stopped",
    "A function to import a class",
    "Are not in Javascript"],
    answer:"A special function that can be stopped midway and then continue from where they had stopped",
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
    qCard.textContent = myArray[qIndex].question;
    for (let i = 0 ; i < ansBtn.length; i++){
        ansBtn[i].textContent = myArray[qIndex].guessItem[i];
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
            footTxt2.setAttribute("style", "display:none;");  
            clearInterval(popupTime)
        }
    }, 100)
};

// Function for counter variable 
function count(){
    if(qIndex === myArray.length){
        qCard.setAttribute("style", "display:none;")
        ansCard.setAttribute("style", "display:none;")
        endCard.setAttribute("style", "display:block")
        scoreCount()
        qIndex = 0;
        finalScore = 0;
        console.log(qIndex)
    }else{
        loadQnA(qIndex)
        // `console.log(qIndex)`
    }

};

// Function to to count the score and load it to the page
function scoreCount(){
    console.log(`Score = ${finalScore}`)
    endScore.textContent = `Your Score: ${finalScore} out of ${myArray.length}`
    finalScore=0;
}

// Event Handlers 
// Start Quiz Handler
cardSwitcher.addEventListener("click", function(){
    loadQnA(0);
    startCard.setAttribute("style", "display:none;")
    qCard.setAttribute("style", "display:flex;")
    ansCard.setAttribute("style", "display:flex;")   
}) 

// Event handler selecting an answer and 
for (let i = 0 ; i < ansBtn.length; i++){
    ansBtn[i].addEventListener("click", function(event){
        var element = event.target;
        var txt = element.textContent;
        // console.log(qIndex)
        myArray[qIndex].guess = txt;
        // Add if count < length of myArray,length
        if (myArray[qIndex].guess === myArray[qIndex].answer) {
            qIndex++
            finalScore++
            popResults(true)
            count()
            
        }else{
            qIndex++
            popResults(false)
            count()
            }
        }    
)};

// Event handler for submitting score and launch start card 
saveScore.addEventListener("click", function(event){
    if (saveName.value === ""){
        confirm("Please Enter Name to Submit")
    }
    console.log(saveName.value)
})

// Event handler to restart button at end Card
restart.addEventListener("click", function(){
    startCard.setAttribute("style", "display:block;");
    endCard.setAttribute("style", "display:none;");
})