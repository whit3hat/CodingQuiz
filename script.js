//Displays Quiz

(function() {
    function buildQuiz(){

//store answer choices
var answers = [];

//Code for Questions, loop through each one
questions.forEach((currentQuestion, questionNumber) => {

//each available answer
for(choice in currentQuestion.answers){

    answers.push(
        `<label>
        <input type="radio" name="question${questionNumber}" value="${choice}">
        ${choice} :
        ${currentQuestion, answers[choice]}
        </label>`
    );
}

//add question and answers to output
output.push(
    `<div class="question"> ${currentQuestion, questions} </div>
    <div class="answers"> ${answers.join('')} </div>`
  );   
});

//quiz container for HTML
quizContainer.innerHTML = output.join('');

//show results loop
function showResults(){
    //gather answer container from quiz
    var answerContainers = quizContainer.querySelectorAll(".answers");

    //keep track of answers
    let numCorrect = 0;

    //each question
    questions.forEach((currentQuestion, questionNumber) => {
        //find selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = 'input[name=question'+questionNumber+']:checked';
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        //if correct
        if(userAnswer===currentQuestion.correctAnswer){
            //add to the number of correct answers
            numCorrect++;
            //color answers green
            answerContainer[questionNumber].style.color = 'lightgreen';
        } else{
            //wrong or blank
            //color the answers red
            answerContainer[questionNumber].style.color = 'red';
          }
        });

        // show correct answer totoal
        resultsContainer.innerHTML = '${numCorrect} +  out of  + ${questions.length}'; 
}

//gather answer containers from quiz
var answerContainers = quizContainer.querySelectorAll('.answers');

//track users answers
let numCorrect = 0;

//Document element variables
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener("click", showResults);
})();

//Timer
var counter = 15;
var interval = setInterval(function(){
    document.getElementById('counter').innerHTML=counter;
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
//submitButton.addEventListener('click', showResults);



