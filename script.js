//Document element variables
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

//Functions
function buildQuiz()
function showResults()
function timer()

//Displays Quiz
buildQuiz();

//Timer
var counter = 15;
var interval = setInterval(function(){
    document.getElementById('counter').innerHTML=count;
    counter--;
    if (counter === 0){
        clearInterval(interval);
        alert("You're out of time!");
    }
}, 1000);
function timer(){
    alert("Times up!");
}

//On Submit show quiz results
submitButton.addEventListener('click', showResults);




